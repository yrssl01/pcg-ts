import { Separator } from '../../components/separ'
import './styles.scss'

export function Feedback() {
  return (
    <>
      <section className="section feedback">
        <Separator size="small" />
        <form method="post" className="section__body">
          <div className="section__body-col">
            <div className="section__content">
              <div className="h4">Напишите нам</div>
              <p>И мы ответим на любые интересующие вас вопросы</p>
            </div>
            <div className="feedback__more">
              <div className="feedback__group">
                <input
                  type=""
                  placeholder="Имя *"
                  className="feedback__input input"
                />
              </div>
              <div className="feedback__group">
                <input
                  type=""
                  placeholder="Город, страна *"
                  className="feedback__input input"
                />
              </div>
              <div className="feedback__group">
                <input
                  type=""
                  placeholder="Телефон *"
                  className="feedback__input input"
                />
              </div>
              <div className="feedback__group">
                <input
                  type=""
                  placeholder="Email"
                  className="feedback__input input"
                />
              </div>
            </div>
          </div>
          <div className="section__body-col">
            <div className="feedback__group feedback__more-area">
              <textarea
                name=""
                id=""
                placeholder="Что вас интересует? *"
                className="feedback__textarea textarea"
              ></textarea>
            </div>
            <div className="feedback__more">
              <button type="submit" className="feedback__button btn">
                Отправить
              </button>
            </div>
          </div>
        </form>
        <Separator size="small" />
      </section>
    </>
  )
}
