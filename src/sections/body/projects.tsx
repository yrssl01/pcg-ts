import { Separator } from '../../components/separ'
import './styles/projects.scss'
import project1 from './../../assets/images/project1.jpg'

export function Projects() {
  return (
    <>
      <section className="section section--dark">
        <div className="relative">
          <div className="project__list">
            <div className="project__item">
              <Separator />
              <div className="section__body">
                <div className="section__body-col">
                  <div className="pride_cats_img-before">
                    <img src={project1} alt="" className="pride_cats_img" />
                  </div>
                </div>
                <div className="section__body-col pride__item-content">
                  <div className="cats__header">
                    <div className="section__header-title">
                      Проектирование <strong>частных зданий</strong>
                    </div>
                  </div>
                  <div className="section__content">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi blanditiis pariatur est velit obcaecati! Eligendi
                      excepturi ut non, minus nulla nihil ea laborum ducimus
                      perspiciatis nesciunt harum hic nostrum. Optio!
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate provident explicabo nemo eius quia commodi! Amet
                      hic quam error numquam iste nulla perferendis mollitia
                      quidem.
                    </p>
                  </div>
                  <div className="section__buttons">
                    <a href="" className="button button--white">
                      Посмотреть работы
                    </a>
                  </div>
                </div>
              </div>
              <Separator border="bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
