import './styles.scss'

import { useParams, Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { fetchProject, fetchProjects } from '../../../core/api/projects'
import type { ProjectDto } from '../../../core/api/projectTypes'
import { Separator } from '../../../components/separ'
import { Image } from 'antd'
import { ProjectDetailSkeleton } from '../../../components/skeleton'

export function ProjectPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>()
  const [project, setProject] = useState<ProjectDto | null>(null)
  const [allProjects, setAllProjects] = useState<ProjectDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!projectSlug) return
    setLoading(true)
    setError(null)

    Promise.all([fetchProject(projectSlug), fetchProjects()])
      .then(([projectData, projectsData]) => {
        setProject(projectData)
        setAllProjects(projectsData)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Не удалось загрузить проект')
        setLoading(false)
      })
  }, [projectSlug])

  const { prevProject, nextProject } = useMemo(() => {
    if (!project || allProjects.length === 0) {
      return {
        prevProject: null as ProjectDto | null,
        nextProject: null as ProjectDto | null,
      }
    }

    const index = allProjects.findIndex((p) => p.slug === project.slug)
    if (index === -1) {
      return { prevProject: null, nextProject: null }
    }

    const prev = index > 0 ? allProjects[index - 1] : null
    const next = index < allProjects.length - 1 ? allProjects[index + 1] : null

    return { prevProject: prev, nextProject: next }
  }, [project, allProjects])

  if (loading) {
    return <ProjectDetailSkeleton />
  }

  if (error || !project) {
    return (
      <section className="section">
        <div className="section__body">
          <div className="section__body-col">
            <h1>Проект не найден</h1>
            <p>{error ?? 'Проверьте корректность ссылки.'}</p>
            <Link to="/#projects" className="button">
              К проектам
            </Link>

            {/* TODO */}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="section project">
        <Separator size="small" border="top" />
        <div className="section__body">
          <div className="section__body-col project-info">
            <div className="project__header">
              <div
                className="section__header project__header-title"
                data-scroll="title"
              >
                <div className="section__header-title">
                  <h1>{project.title}</h1>
                </div>
                <div className="section__header-subtitle">Проектирование</div>
                <div className="crumbs">
                  <ul
                    className="crumbs__list"
                    itemScope
                    itemType="https://schema.org/BreadcrumbList"
                  >
                    <li
                      className="crumbs__list-point"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <Link className="crumbs__item" to="/">
                        <span itemProp="name">Главная</span>
                      </Link>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li
                      className="crumbs__list-point"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <Link className="crumbs__item" to="/projects/">
                        <span itemProp="name">Проекты</span>
                      </Link>
                      <meta itemProp="position" content="2" />
                    </li>
                    <li
                      className="crumbs__list-point active"
                      itemProp="itemListElement"
                      itemScope
                      itemType="http://schema.org/ListItem"
                    >
                      <Link
                        className="crumbs__item"
                        to={`/projects/${project.slug}`}
                      >
                        <span itemProp="name">{project.title}</span>
                      </Link>
                      <meta itemProp="position" content="3" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section__content project__header-list">
                <ul>
                  {project.address && (
                    <li>
                      <strong>Адрес: </strong>
                      {project.address}
                    </li>
                  )}
                  {project.period && (
                    <li>
                      <strong>Сроки строительства: </strong>
                      {project.period}
                    </li>
                  )}
                  {project.services.length > 0 && (
                    <li>
                      <strong>Нами проведены/проводятся: </strong>
                      {project.services.map((s) => s.title).join(', ')}
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="section__content project__desc">
              <h4>Описание проекта</h4>
              <p>{project.description}</p>
              {project.extra_description && <p>{project.extra_description}</p>}
            </div>
            <div className="project__plan"></div>
            <div className="project__plan"></div>
          </div>
          {project.images.length > 0 && (
            <div className="section__body-col project-gallery">
              <div className="project-gallery__header">
                <div className="section__header" data-scroll="title">
                  <div className="section__header-title">
                    <strong>{project.title}</strong>
                  </div>
                  <div className="section__header-subtitle">Проектирование</div>
                </div>
              </div>
              <ul className="project-gallery__list off">
                <Image.PreviewGroup>
                  {project.images.map((img, index) => {
                    const src = img.image
                    return (
                      <li className="project-gallery__list-point" key={img.id}>
                        <div className="project-gallery__item">
                          <Image
                            loading="lazy"
                            src={src}
                            alt={`${project.title} - ${index + 1}`}
                            className="project-gallery__item-image"
                          />
                        </div>
                      </li>
                    )
                  })}
                </Image.PreviewGroup>
              </ul>
            </div>
          )}
        </div>
        <Separator border="bottom" />
      </section>
      <section className="section">
        <div className="section__body">
          <div className="section__body-col">
            {prevProject && (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="perelink prev"
              >
                <span className="pcg pcg-chevron-left" />
                {prevProject.title}
              </Link>
            )}
          </div>
          <div className="section__body-col">
            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="perelink next"
              >
                {nextProject.title}
                <span className="pcg pcg-chevron-right" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
