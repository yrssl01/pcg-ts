import './styles.scss'
import { Separator } from '../../../components/separ'
import { useParams, Link } from 'react-router-dom'
import { fetchService } from '../../../core/api/services'
import type { ServiceDetailDto } from '../../../core/api/serviceTypes'
import { Image } from 'antd'
import { useEffect, useState } from 'react'
import { ServiceDetailSkeleton } from '../../../components/skeleton'

export function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const [service, setService] = useState<ServiceDetailDto | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!serviceSlug) return

    setLoading(true)
    setError(null)

    fetchService(serviceSlug)
      .then((data) => {
        if (!data.has_detail_page) {
          setError('Для этой услуги нет детальной страницы')
          setService(null)
        } else {
          setService(data)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Не удалось загрузить услугу')
        setLoading(false)
      })
  }, [serviceSlug])

  if (loading) {
    return <ServiceDetailSkeleton />
  }

  if (error || !service) {
    return (
      <>
        <section className="section">
          <Separator size="small" border="top" />
          <div className="section__body">
            <div className="section__body-col">
              <div className="section__header" data-scroll="title">
                <div className="section__header-title">Услуга не найдена</div>
                <div className="section__header-subtitle">
                  Что-то произошло не так :(
                </div>
              </div>
            </div>
            <div className="section__body-col">
              <div className="section__content">
                <h1>Страница не найдена</h1>
                <p>
                  Страница, на которую Вы зашли, не существует.
                  <br />
                  Но у нас есть много другого, что Вас может заинтересовать.
                </p>
              </div>
              <div className="section__buttons">
                <Link to="/" className="button">
                  Вернуться на главную
                </Link>
              </div>
            </div>
          </div>
          <Separator size="small" border="bottom" />
          <Separator />
        </section>
      </>
    )
  }

  return (
    <>
      <section className="section">
        <Separator size="small" border="top" />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header" data-scroll="title">
              <div className="section__header-title">{service.title}</div>
              <div className="section__header-subtitle">
                {service.description}
              </div>
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
                    <Link className="crumbs__item" to="/services/">
                      <span itemProp="name">Услуги</span>
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
                      to={`/services/${service.slug}`}
                    >
                      <span itemProp="name">{service.title}</span>
                    </Link>
                    <meta itemProp="position" content="3" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section__body-col">
            {service.blocks.length > 0 && (
              <div className="section__content">
                {service.blocks.map((block) => (
                  <div key={block.id}>
                    <h4>{block.title}</h4>
                    <div>
                      <p>{block.body}</p>
                      {block.images.length > 0 && (
                        <a href={`#${block.title}`}>Перейти к фото</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="header__footer"> </div>
        </div>
        <Separator size="small" border="bottom" />
        <Separator />
      </section>
      {service.blocks.length > 0 && (
        <div className="category">
          <div className="section category__year">
            <div className="section__body">
              {service.blocks.map(
                (block) =>
                  block.images.length > 0 && (
                    <>
                      <div id={block.title} className="category-title">
                        <strong>{block.title}</strong>
                      </div>
                      <ul className="category__list" key={block.id}>
                        <Image.PreviewGroup>
                          {block.images.map((img) => (
                            <li className="category__list-point" key={img.id}>
                              <div className="category__item">
                                <Image
                                  src={img.image}
                                  alt={img.caption || block.title}
                                  loading="lazy"
                                  draggable="false"
                                  className="category__item-image"
                                />
                                {img.caption && (
                                  <div className="category__item-title">
                                    {img.caption}
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </Image.PreviewGroup>
                      </ul>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
