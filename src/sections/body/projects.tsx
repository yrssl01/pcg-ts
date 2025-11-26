import { Separator } from '../../components/separ'
import './styles/projects.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchProjects } from '../../core/api/projects'
import type { ProjectDto } from '../../core/api/projectTypes'
import { ProjectCardSkeleton } from '../../components/skeleton'

export function ProjectsSection() {
  const [projects, setProjects] = useState<ProjectDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Не удалось загрузить проекты')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <>
        <section className="section section--dark">
          <div className="relative">
            {[1, 2].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </>
    )
  }

  if (error) {
    return (
      <>
        <section className="section section--dark">
          <div className="relative">
            <div className="project__item">
              <Separator />
              <div className="section__body">
                <div className="section__body-col col-sm-p-0">
                  <div className="pride_cats_img-before">
                    <div className="pride_cats_img"></div>
                  </div>
                </div>
                <div className="section__body-col pride__item-content">
                  <div className="cats__header">
                    <div className="section__header-title"></div>
                  </div>
                  <div className="section__content"></div>
                </div>
              </div>
              <Separator border="bottom" />
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="section section--dark">
        <div className="relative">
          {projects.map((project) => {
            const preview = project.images[0]?.image
            return (
              <div className="project__item">
                <Separator />
                <div className="section__body">
                  <div className="section__body-col col-sm-p-0">
                    <div className="pride_cats_img-before">
                      {preview ? (
                        <img
                          src={preview}
                          alt={project.title}
                          className="pride_cats_img"
                          draggable={false}
                          loading="lazy"
                        />
                      ) : (
                        <div className="pride_cats_img pride_cats_img--placeholder">
                          Нет изображения
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="section__body-col pride__item-content">
                    <div className="cats__header">
                      <div className="section__header-title">
                        <strong>{project.title}</strong>
                      </div>
                    </div>
                    <div className="section__content">
                      {project.description && <p>{project.description}</p>}
                      {project.extra_description && (
                        <p>{project.extra_description}</p>
                      )}
                    </div>
                    <div className="section__buttons">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="button button--white"
                      >
                        Посмотреть проект
                      </Link>
                    </div>
                  </div>
                </div>
                <Separator border="bottom" />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
