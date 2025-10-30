import { Separator } from '../../components/separ'
import './styles.scss'

export function Footer() {
  return (
    <>
      <section className="section footer">
        <Separator />
        <div className="section__body">
          <div className="section__body-col footer__title">
            <div className="section__header" data-scroll="title">
              <div className="section__header-title">
                <strong>Контакты</strong>
              </div>
            </div>
          </div>
          <div className="section__body-col">
            <div className="footer__subtitle">Заказать проект</div>
            <div className="footer__block">
              <div className="footer__block-col">
                <div className="footer__block-title">Алматы</div>
                <div className="footer__block-content">
                  ул. Тимирязева 42 к15/4
                </div>
                <div className="footer__block-content">
                  Время работы: с 09:00 до 17:00
                  <br />
                  Выходные: суббота, воскресенье
                </div>
                <div className="footer__block-content">
                  <a href="tel:+7777777777">+7 777 777-77-77</a> Имя
                  <br />
                  <a
                    title="WhatsApp"
                    href="https://api.whatsapp.com/send?phone=77777777777"
                    className="icon icon_whatsapp"
                  ></a>
                  <a href="mailto:std.project@mail.ru">std.project@mail.ru</a>
                </div>
              </div>
              <div className="footer__block-col">
                <div className="footer__block-title">
                  <ul className="social__list"></ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section__body-col">
            <div className="footer__subtitle">Сотрудничество</div>
            <div className="footer__block">
              <div className="footer__block-col">
                <div className="footer__block-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
