import './styles.scss'

import { useParams, Link } from 'react-router-dom'
import type { ProjectSlug } from '../../../core/data/projects'
import { getProjectBySlug } from '../../../core/data/projects'
import { Separator } from '../../../components/separ'

const adminBuildingImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/admin-building/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const projectGalleries: Record<ProjectSlug, string[]> = {
  'admin-building': adminBuildingImages,
}

export function ProjectPage() {
  const { projectSlug } = useParams<{ projectSlug: ProjectSlug }>()
  const project = getProjectBySlug(projectSlug)
  const images = projectSlug ? projectGalleries[projectSlug] ?? [] : []

  if (!project) return

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
                  <li>
                    <strong>Адрес: </strong>
                    {project.address}
                  </li>
                  <li>
                    <strong>Сроки строительства: </strong>
                    {project.period}
                  </li>
                  <li>
                    <strong>Нами проведены/проводятся: </strong>
                    {project.services.join(', ')}
                  </li>
                </ul>
              </div>
            </div>
            <div className="section__content project__desc">
              <h4>Описание проекта</h4>
              <p>{project.shortDescription}</p>
              <p>{project.extraDescription}</p>
            </div>
            <div className="project__plan"></div>
            <div className="project__plan"></div>
          </div>
          <div className="section__body-col project-gallery">
            <ul className="project-gallery__list off">
              <li className="project-gallery__list-point"></li>
            </ul>
          </div>
        </div>
        <Separator size="small" border="bottom" />
        <Separator />
      </section>
    </>
  )
}
