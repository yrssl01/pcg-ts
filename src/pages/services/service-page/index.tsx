import { Separator } from '../../../components/separ'
import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../../../core/data/services'
import type { ServiceSlug } from '../../../core/data/services'

export function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: ServiceSlug }>()
  const service = getServiceBySlug(serviceSlug)

  return (
    <>
      <section className="section">
        <Separator size="small" border="top" />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header" data-scroll="title">
              <div className="section__header-title">{service?.title}</div>
              <div className="section__header-subtitle">{service?.intro}</div>
            </div>
          </div>
          <div className="section__body-col">
            <div className="section__content">
              {service?.sections.map((section) => (
                <div key={section.id}>
                  <h1>{section.title}</h1>
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
    </>
  )
}
