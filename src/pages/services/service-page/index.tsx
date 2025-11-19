import './styles.scss'
import { Separator } from '../../../components/separ'
import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../../../core/data/services'
import type { ServiceSlug } from '../../../core/data/services'
import { Image } from 'antd'

const designImages = Object.values(
  import.meta.glob('/src/assets/images/services/design/*.{jpg,jpeg,png,webp}', {
    eager: true,
    as: 'url',
  })
) as string[]

export function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: ServiceSlug }>()
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
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
              <div className="section__header-title">{service?.title}</div>
              <div className="section__header-subtitle">{service?.intro}</div>
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
            <div className="section__content">
              {service?.sections.map((section) => (
                <div key={section.id}>
                  <h4>{section.title}</h4>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="header__footer"> </div>
        </div>
        <Separator size="small" border="bottom" />
        <Separator />
      </section>

      {service.slug === 'design' && designImages.length > 0 && (
        <div className="category">
          <section className="section category__year">
            <div className="section__body">
              <ul className="category__list">
                <Image.PreviewGroup>
                  {designImages.map((src, index) => (
                    <li className="category__list-point">
                      <div className="category__item">
                        <Image
                          src={src}
                          loading="lazy"
                          draggable="false"
                          className="category__item-image"
                        />
                      </div>
                    </li>
                  ))}
                </Image.PreviewGroup>
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
