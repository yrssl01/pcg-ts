import { useState } from 'react'
import './styles/services.scss'

import service1 from '../../assets/images/service-icons/map.png'
import service2 from '../../assets/images/service-icons/project-management.png'
import service3 from '../../assets/images/service-icons/design.png'
import service4 from '../../assets/images/service-icons/research.png'
import service5 from '../../assets/images/service-icons/supervision.png'
import service6 from '../../assets/images/service-icons/construction-site.png'
import service7 from '../../assets/images/service-icons/expert.png'
import service8 from '../../assets/images/service-icons/delivery.png'
import service9 from '../../assets/images/service-icons/maintenance.png'
import referenceList from '../../assets/documents/reference-list.pdf'

import { Separator } from '../../components/separ'

export function Services() {
  const [showServices, setShowServices] = useState(false)

  const handleButtonClick = () => {
    setShowServices(!showServices)
  }

  return (
    <>
      <section className="section">
        <Separator size="small" />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header scale__header">
              <div className="section__header-title">
                Что мы <strong>предоставляем</strong>
              </div>
              <div className="section__header-subtitle">Наши услуги</div>
            </div>
            <div className="section__buttons">
              <a href={referenceList} className="button">
                Референс-лист
              </a>
            </div>
          </div>
          <div className="section__body-col">
            <div id="services">
              <ul className="services__wrapper">
                <li className="services__point">
                  <a href="" className="grayscale">
                    <div className="services__block-image">
                      <img
                        src={service1}
                        alt=""
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <h5 className="services__block-title">
                      Услуги девелопмента
                    </h5>
                  </a>
                </li>
                <li className="services__point">
                  <a href="" className="grayscale">
                    <div className="services__block-image">
                      <img
                        src={service2}
                        alt=""
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <h5 className="services__block-title">
                      Управление проектом
                    </h5>
                  </a>
                </li>
                <li className="services__point">
                  <a href="" className="grayscale">
                    <div className="services__block-image">
                      <img
                        src={service3}
                        alt=""
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <h5 className="services__block-title">
                      Разработка проекта
                    </h5>
                  </a>
                </li>
              </ul>
            </div>
            <Separator size="small" />
            {showServices && (
              <div className="more__services">
                <div>
                  <ul className="services__wrapper">
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service4}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Экспертные работы
                        </h5>
                      </a>
                    </li>
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service5}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Надзорные услуги
                        </h5>
                      </a>
                    </li>
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service6}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Строительно-монтажные работы (СМР)
                        </h5>
                      </a>
                    </li>
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service7}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Аттестованные эксперты
                        </h5>
                      </a>
                    </li>
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service8}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Экспертный выезд
                        </h5>
                      </a>
                    </li>
                    <li className="services__point">
                      <a href="" className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service9}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          Полное оснащение
                        </h5>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <button className="button-more" onClick={handleButtonClick}>
              {showServices ? 'Скрыть' : 'Еще больше'}
            </button>
          </div>
        </div>
        <Separator size="small" border="bottom" />
      </section>
    </>
  )
}
