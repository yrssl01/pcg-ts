import { Separator } from '../../components/separ'
import './styles/metrics.scss'

export function Metrics() {
  return (
    <>
      <section className="section">
        <Separator />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header scrolled" data-scroll="title">
              <div className="section__header-title">
                <strong>Инновации и интеграции в строительстве</strong>
              </div>
            </div>
            <ul className="metrics__list">
              <li className="metrics__list-point">
                <div className="metrics__item">
                  <div className="metrics__item-title">18</div>
                  <div className="metrics__item-desc">Лет на рынке</div>
                </div>
              </li>
              <li className="metrics__list-point">
                <div className="metrics__item">
                  <div className="metrics__item-title">400</div>
                  <div className="metrics__item-desc">
                    обхектов прошли <br /> через нас
                  </div>
                </div>
              </li>
              <li className="metrics__list-point">
                <div className="metrics__item">
                  <div className="metrics__item-title">5</div>
                  <div className="metrics__item-desc">
                    компаний <br /> в составе группы
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="section__body-col">
            <div className="section__content">
              <h1>От концепции до строительства </h1>
              <p>
                Каждый наш проект — это путь от идеи до реализованного объекта.
                Мы объединяем все ключевые этапы в едином процессе, обеспечивая
                целостность, эффективность и контроль качества на каждом шаге.
              </p>
              <p>
                Используя опыт, инновации и технологии BIM, мы реализуем
                проекты, отличающиеся качеством, функциональностью и точностью
                исполнения.
              </p>
              <div className="section__buttons">
                <a href="" className="button">
                  Начнем проект вместе!
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator border />
      </section>
    </>
  )
}
