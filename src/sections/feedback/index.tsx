import { useState } from 'react'
import { Separator } from '../../components/separ'
import './styles.scss'

export function Feedback() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <section id="feedback" className="section feedback">
        <Separator size="small" />
        <form method="post" className="section__body">
          <div className="section__body-col">
            <div className="section__content">
              <div className="h4">Напишите нам</div>
              <p>И мы ответим на любые интересующие вас вопросы</p>
            </div>
            {expanded && (
              <div className="feedback__more">
                <div className="feedback__group">
                  <input
                    type="text"
                    placeholder="Имя *"
                    className="feedback__input input"
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="text"
                    placeholder="Город, страна *"
                    className="feedback__input input"
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    className="feedback__input input"
                  />
                </div>
                <div className="feedback__group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="feedback__input input"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="section__body-col">
            <div className="feedback__group feedback__more-area">
              <textarea
                name=""
                id=""
                placeholder="Что вас интересует? *"
                className="feedback__textarea textarea"
                onFocus={() => setExpanded(true)}
                onClick={() => setExpanded(true)}
              ></textarea>
            </div>
            {expanded && (
              <div className="feedback__more">
                <button type="submit" className="feedback__button btn">
                  Отправить
                </button>
              </div>
            )}
          </div>
        </form>
        <Separator size="small" />
      </section>
    </>
  )
}
