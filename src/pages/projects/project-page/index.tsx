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
            <div className="project__header"></div>
            <div className="section__content project__desc"></div>
            <div className="project__plan"></div>
            <div className="project__plan"></div>
          </div>
          <div className="section__body-col project-gallery">
            <ul className="project-gallery__list off">
              <li className="project-gallery__list-point"></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
