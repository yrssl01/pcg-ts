import { Separator } from '../separ'
import './styles.scss'

export function ProjectCardSkeleton() {
  return (
    <div className="project__item">
      <Separator />
      <div className="section__body">
        <div className="section__body-col col-sm-p-0">
          <div className="pride_cats_img-before">
            <div className="skeleton dark skeleton--image" />
          </div>
        </div>
        <div className="section__body-col pride__item-content">
          <div className="cats__header">
            <div className="skeleton dark skeleton--title" />
          </div>
          <div className="section__content">
            <p>
              <div className="skeleton dark skeleton--text" />
              <div className="skeleton dark skeleton--text skeleton--text-short" />
            </p>
            <p>
              <div className="skeleton dark skeleton--text" />
              <div className="skeleton dark skeleton--text skeleton--text-short" />
            </p>
          </div>
          <div className="section__buttons">
            <div className="button button--white">
              <div className="skeleton dark skeleton__button--text" />
            </div>
          </div>
        </div>
      </div>
      <Separator border="bottom" />
    </div>
  )
}

export function ProjectDetailSkeleton() {
  return (
    <>
      <section className="section project">
        <Separator size="small" border="top" />
        <div className="section__body">
          <div className="section__body-col project-info">
            <div className="project__header">
              <div className="section__header project__header-title">
                <div className="skeleton skeleton--title" />
                <div className="section__header-subtitle skeleton skeleton--text skeleton--text-short"></div>
              </div>
              <div className="section__content project__header-list">
                <div className="skeleton skeleton--text"></div>
                <div className="skeleton skeleton--text"></div>
                <div className="skeleton skeleton--text skeleton--text-short"></div>
              </div>
            </div>
            <div className="section__content project__desc">
              <h4>
                <div className="skeleton skeleton--title" />
              </h4>
              <p>
                <div className="skeleton skeleton--text" />
                <div className="skeleton skeleton--text" />
                <div className="skeleton skeleton--text skeleton--text-short" />
              </p>
            </div>
          </div>
          <div className="section__body-col project-gallery">
            <div className="project-gallery__header">
              <div className="section__header">
                <div className="skeleton skeleton--title" />
                <div className="section__header-subtitle skeleton skeleton--text skeleton--text-short" />
              </div>
            </div>
            <ul className="project-gallery__list off">
              <li className="project-gallery__list-point">
                <div className="project-gallery__item">
                  <div className="skeleton skeleton-gallery--image project-gallery__item-image" />
                </div>
              </li>
              <li className="project-gallery__list-point">
                <div className="project-gallery__item">
                  <div className="skeleton skeleton-gallery--image project-gallery__item-image" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
