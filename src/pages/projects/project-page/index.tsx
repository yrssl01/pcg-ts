import './styles.scss'

import { useParams, Link } from 'react-router-dom'
import type { ProjectSlug } from '../../../core/data/projects'
import { getProjectBySlug } from '../../../core/data/projects'
import { Separator } from '../../../components/separ'
import { Image } from 'antd'

const adminBuildingImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/gallery/admin-building/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const businessCenterImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/gallery/business-center/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const medicalCenterImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/gallery/medical-center/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const tiensOfficeImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/gallery/tiens-office/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const pressClubImages = Object.values(
  import.meta.glob(
    '/src/assets/images/projects/gallery/press-club/*.{jpg,jpeg,png,webp}',
    {
      eager: true,
      as: 'url',
    }
  )
) as string[]

const projectGalleries: Record<ProjectSlug, string[]> = {
  'admin-building': adminBuildingImages,
  'business-center': businessCenterImages,
  'medical-center': medicalCenterImages,
  'tiens-office': tiensOfficeImages,
  'press-club': pressClubImages,
}

import adminBuildingPlan from '../../../assets/images/projects/plans/admin_building_plan.jpg'
import businessCenterPlan from '../../../assets/images/projects/plans/admin_building_plan.jpg'
import medicalCenterPlan from '../../../assets/images/projects/plans/admin_building_plan.jpg'
import tiensOfficePlan from '../../../assets/images/projects/plans/tiens_office_plan.jpg'
import pressClubPlan from '../../../assets/images/projects/plans/press_club_plan.jpg'

const projectPlans: Partial<Record<ProjectSlug, string>> = {
  'admin-building': adminBuildingPlan,
  'business-center': businessCenterPlan,
  'medical-center': medicalCenterPlan,
  'tiens-office': tiensOfficePlan,
  'press-club': pressClubPlan,
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
                  {project.period && (
                    <li>
                      <strong>Сроки строительства: </strong>
                      {project.period}
                    </li>
                  )}

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
          {images.length > 0 && (
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
                  {images.map((src, index) => (
                    <li className="project-gallery__list-point">
                      <div className="project-gallery__item">
                        <Image
                          src={src}
                          className="project-gallery__item-image"
                        />
                      </div>
                    </li>
                  ))}
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
