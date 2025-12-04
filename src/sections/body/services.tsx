import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/services.scss'
import { fetchServices } from '../../core/api/services'
import type { ServiceListDto } from '../../core/api/serviceTypes'
import referenceList from '../../assets/documents/reference-list.pdf'

import { Separator } from '../../components/separ'

export function ServicesSection() {
  const [services, setServices] = useState<ServiceListDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showServices, setShowServices] = useState(false)

  useEffect(() => {
    fetchServices()
      .then((data) => {
        setServices(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Не удалось загрузить услуги')
        setLoading(false)
      })
  }, [])

  const handleButtonClick = () => {
    setShowServices(!showServices)
  }

  const mainServices = services.slice(0, 6)
  const moreServices = services.slice(6)

  return (
    <section className="section" id="services">
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
          {error && <div>{error}</div>}
          {loading && <div>Загрузка</div>}
          {!loading && !error && (
            <div id="services">
              <ul className="services__wrapper">
                {mainServices.map((service) => (
                  <li key={service.id} className="services__point">
                    {service.has_detail_page ? (
                      <Link
                        to={`/services/${service.slug}`}
                        className="grayscale"
                      >
                        <div className="services__block-image">
                          <img
                            src={service.icon}
                            alt={service.title}
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <h5 className="services__block-title">
                          {service.title}
                        </h5>
                      </Link>
                    ) : (
                      <div className="grayscale">
                        <div className="services__block-image">
                          {service.icon ? (
                            <img
                              src={service.icon}
                              alt={service.title}
                              loading="lazy"
                              draggable="false"
                            />
                          ) : (
                            <div className="service__icon-placeholder" />
                          )}
                        </div>
                        <h5 className="services__block-title">
                          {service.title}
                        </h5>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator size="small" />
          {moreServices.length > 0 && (
            <>
              {showServices && (
                <div className="more__services">
                  <div>
                    <ul className="services__wrapper">
                      {moreServices.map((service) => (
                        <li key={service.id} className="services__point">
                          {service.has_detail_page ? (
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
                          ) : (
                            <div className="grayscale">
                              <div className="services__block-image">
                                {service.icon ? (
                                  <img
                                    src={service.icon}
                                    alt={service.title}
                                    loading="lazy"
                                    draggable="false"
                                  />
                                ) : (
                                  <div className="services__icon-placeholder" />
                                )}
                              </div>
                              <h5 className="services__block-title">
                                {service.title}
                              </h5>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
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
