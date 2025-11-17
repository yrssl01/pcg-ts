// ServicesSection.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

const servicesWithPages = [
  { icon: service1, title: 'Девелоперские услуги', slug: 'development' },
  { icon: service2, title: 'Управление проектом', slug: 'project-management' },
  { icon: service3, title: 'Разработка проекта', slug: 'design' },
  { icon: service4, title: 'Экспертные работы', slug: 'research' },
  { icon: service5, title: 'Надзорные услуги', slug: 'supervision' },
  {
    icon: service6,
    title: 'Строительно-монтажные работы (СМР)',
    slug: 'construction',
  }, // 6
]

const servicesWithoutPages = [
  { icon: service7, title: 'Аттестованные эксперты' },
  { icon: service8, title: 'Экспертный выезд' },
  { icon: service9, title: 'Полное оснащение' },
]

export function ServicesSection() {
  const [showServices, setShowServices] = useState(false)

  const handleButtonClick = () => {
    setShowServices(!showServices)
  }

  return (
    <section className="section">
      <Separator size="small" border="top" />
      <div className="section__body">
        <div className="section__body-col">
          <div className="section__header scale__header">
            <div className="section__header-title">
              Что мы <strong>предоставляем</strong>
            </div>
            <div className="section__header-subtitle">Наши услуги</div>
          </div>
          <div className="section__buttons">
            <a
              href={referenceList}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Референс-лист
            </a>
          </div>
        </div>

        <div className="section__body-col">
          <div id="services">
            <ul className="services__wrapper">
              {servicesWithPages.slice(0, 3).map((service) => (
                <li key={service.slug} className="services__point">
                  <Link to={`/services/${service.slug}`} className="grayscale">
                    <div className="services__block-image">
                      <img
                        src={service.icon}
                        alt=""
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <h5 className="services__block-title">{service.title}</h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator size="small" />

          {showServices && (
            <div className="more__services">
              <div>
                <ul className="services__wrapper">
                  {servicesWithPages.slice(3, 6).map((service) => (
                    <li key={service.slug} className="services__point">
                      <Link
                        to={`/services/${service.slug}`}
                        className="grayscale"
                      >
                        <div className="services__block-image">
                          <img
                            src={service.icon}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          {service.title}
                        </h5>
                      </Link>
                    </li>
                  ))}
                  {servicesWithoutPages.map((service) => (
                    <li key={service.title} className="services__point">
                      <div className="grayscale">
                        <div className="services__block-image">
                          <img
                            src={service.icon}
                            alt=""
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          {service.title}
                        </h5>
                      </div>
                    </li>
                  ))}
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
  )
}
