import { Separator } from '../separ'
import './styles.scss'

export function ProjectCardSkeleton() {
  return (
    <div className="project__item">
      <Separator />
      <div className="section__body">
        <div className="section__body-col col-sm-p-0">
          <div className="pride_cats_img-before">
            <div className="skeleton skeleton--image" />
          </div>
        </div>
        <div className="section__body-col pride__item-content">
          <div className="cats__header">
            <div className="skeleton skeleton--title" />
          </div>
          <div className="section__content">
            <p>
              <div className="skeleton skeleton--text" />
              <div className="skeleton skeleton--text skeleton--text-short" />
            </p>
            <p>
              <div className="skeleton skeleton--text" />
              <div className="skeleton skeleton--text skeleton--text-short" />
            </p>
          </div>
          <div className="section__buttons">
            <div className="button button--white">
              <div className="skeleton skeleton__button--text" />
            </div>
          </div>
        </div>
      </div>
      <Separator border="bottom" />
    </div>
  )
}
