import { Separator } from '../../components/separ'
import './styles/projects.scss'
import project1 from '../../assets/images/projects/project1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import project3 from '../../assets/images/projects/project3.jpg'
import project4 from '../../assets/images/projects/project4.jpg'
import project5 from '../../assets/images/projects/project5.jpg'

export function Projects() {
  return (
    <>
      <section className="section section--dark">
        <div className="relative">
          <div className="project__item">
            <Separator />
            <div className="section__body">
              <div className="section__body-col col-sm-p-0">
                <div className="pride_cats_img-before">
                  <img
                    src={project1}
                    alt=""
                    className="pride_cats_img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="section__body-col pride__item-content">
                <div className="cats__header">
                  <div className="section__header-title">
                    <strong>Административное</strong> здание
                  </div>
                </div>
                <div className="section__content">
                  <p>
                    Ультрасовременное административное здание, выполненное с
                    учетом современных архитектурных тенденций и актуальных
                    строительных решений.
                  </p>
                  <p>
                    Проект разработан с применением технологии информационного
                    моделирования, что позволяет максимально точно
                    координировать все этапы строительства, минимизировать риски
                    и оптимизировать сроки.
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
          <div className="project__item">
            <Separator />
            <div className="section__body">
              <div className="section__body-col col-sm-p-0">
                <div className="pride_cats_img-before">
                  <img
                    src={project2}
                    alt=""
                    className="pride_cats_img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="section__body-col pride__item-content">
                <div className="cats__header">
                  <div className="section__header-title">
                    <strong>Бизнес</strong>-Центр
                  </div>
                </div>
                <div className="section__content">
                  <p>
                    Современный многофункциональный комплекс с просторными
                    офисными и общественными пространствами.
                  </p>
                  <p>
                    Проект разработан с применением технологии информационного
                    моделирования, что позволило оптимизировать архитектурные и
                    инженерные решения, повысить качество реализации и
                    обеспечить комфортную инфраструктуру для работы и деловых
                    встреч.
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
          <div className="project__item">
            <Separator />
            <div className="section__body">
              <div className="section__body-col col-sm-p-0">
                <div className="pride_cats_img-before">
                  <img
                    src={project3}
                    alt=""
                    className="pride_cats_img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="section__body-col pride__item-content">
                <div className="cats__header">
                  <div className="section__header-title">
                    <strong>Медицинский</strong> Центр
                  </div>
                </div>
                <div className="section__content">
                  <p>
                    Современный медицинский центр, объединяющий функциональный
                    дизайн и продуманные планировочные решения. Пространство
                    создано для комфорта пациентов и эффективной работы
                    медицинского персонала.
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
          <div className="project__item">
            <Separator />
            <div className="section__body">
              <div className="section__body-col col-sm-p-0">
                <div className="pride_cats_img-before">
                  <img
                    src={project4}
                    alt=""
                    className="pride_cats_img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="section__body-col pride__item-content">
                <div className="cats__header">
                  <div className="section__header-title">
                    Офис <strong>TIENS</strong> Казахстан
                  </div>
                </div>
                <div className="section__content">
                  <p>
                    Современное офисное пространство, созданное в результате
                    реконструкции здания компании TIENS - Казахстан. Проект
                    объединяет обновлённый архитектурный облик, инновационные
                    решения и комфортные условия для работы.
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
          <div className="project__item">
            <Separator />
            <div className="section__body">
              <div className="section__body-col col-sm-p-0">
                <div className="pride_cats_img-before">
                  <img
                    src={project5}
                    alt=""
                    className="pride_cats_img"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="section__body-col pride__item-content">
                <div className="cats__header">
                  <div className="section__header-title">
                    Здание <strong>Пресс-Клуба</strong>
                  </div>
                </div>
                <div className="section__content">
                  <p>
                    Реконструкция исторического здания Пресс-клуба на улице
                    Фурманова. Пространство, где традиционно проходили
                    общественные слушания, пресс-конференции и релизы, получило
                    современное архитектурное оформление и техническое
                    обновление.
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
      </section>
    </>
  )
}
