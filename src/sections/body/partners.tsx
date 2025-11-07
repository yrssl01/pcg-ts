import { Separator } from '../../components/separ'
import './styles/partners.scss'

const modules = import.meta.glob('/src/assets/images/logos/logo*.svg', {
  eager: true,
  as: 'url',
})

const logos = Object.entries(modules)
  .map(([path, url]) => {
    const n = path.match(/logo(\d+)\.svg$/)?.[1]
    return {
      url: url as string,
      order: Number(n ?? 0),
      alt: `Partner logo ${n}`,
    }
  })
  .sort((a, b) => a.order - b.order)

export function Partners() {
  return (
    <>
      <section className="section">
        <Separator size="small" />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header scale__header">
              <div className="section__header-title">
                Наши <strong>партнеры</strong>
              </div>
            </div>
          </div>
          <div className="section__body-col">
            <div id="partners">
              <ul className="partners__wrapper">
                {logos.map((l) => (
                  <li className="partners__point">
                    <div className="partners__block-image">
                      <div className="grayscale">
                        <img key={l.url} src={l.url} alt={l.alt} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Separator size="small" />
      </section>
    </>
  )
}
