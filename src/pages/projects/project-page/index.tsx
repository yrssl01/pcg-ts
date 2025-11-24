import './styles.scss'

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProject } from '../../../core/api/projects'
import type { ProjectDto } from '../../../core/api/types'
import { Separator } from '../../../components/separ'
import { Image } from 'antd'

export function ProjectPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>()
  const [project, setProject] = useState<ProjectDto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!projectSlug) return
    setLoading(true)
    setError(null)

    fetchProject(projectSlug)
      .then((data) => {
        setProject(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Не удалось загрузить проект')
        setLoading(false)
      })
  }, [projectSlug])

  if (loading) {
    return (
      <section className="section">
        <div className="section__body">
          <div className="section__body-col">Загрузка проекта…</div>
          {/* TODO */}
        </div>
      </section>
    )
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
                      <li className="project-gallery__list-point">
                        <div className="project-gallery__item">
                          <Image
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
        <Separator size="small" border="bottom" />
        <Separator />
      </section>
    </>
  )
}
