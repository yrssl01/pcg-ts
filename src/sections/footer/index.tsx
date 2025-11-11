import { YMaps, Map, Placemark } from '@iminside/react-yandex-maps'

import { Separator } from '../../components/separ'
import './styles.scss'

export function Footer() {
  const defaultState = {
    center: [43.216674, 76.904928],
    zoom: 18,
  }

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
            <div className="footer__subtitle">Связаться с нами</div>
            <div className="footer__block">
              <div className="footer__block-col">
                <div className="footer__block-title">Алматы</div>
                <div className="footer__block-content">
                  Головной офис: "Атакент", офисный городок "Экспо-Сити", ул.
                  Тимирязева 42, корпус 15/4
                </div>
                <div className="footer__block-content">
                  Время работы: с 08:00 до 17:00
                  <br />
                  Выходные: суббота, воскресенье
                </div>
                <div className="footer__block-content">
                  <a href="tel:+77273111105">+7 727 311-11-05</a>
                  <br />
                  <a href="tel:+77012228233">+7 701 222-82-33</a>
                  <br />
                  <a
                    title="WhatsApp"
                    href="https://api.whatsapp.com/send?phone=77273111105"
                    className="icon icon_whatsapp"
                  ></a>
                  <a href="mailto:std.project@mail.ru">std.project@mail.ru</a>
                  <br />
                  <a href="https://www.std-pro.kz">www.std-pro.kz</a>
                </div>
              </div>
              {/* <div className="footer__block-col">
                <div className="footer__block-title">
                  <ul className="social__list"></ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="section__body-col">
            <div className="footer__subtitle">Мы на карте</div>
            <div className="footer__block">
              <div className="footer__block-col">
                <div className="footer__block-content">
                  <YMaps>
                    <Map defaultState={defaultState} height={300}>
                      <Placemark geometry={[43.216674, 76.904928]} />
                    </Map>
                  </YMaps>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
