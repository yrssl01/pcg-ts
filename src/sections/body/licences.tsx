import { Image } from 'antd'
import { Separator } from '../../components/separ'
import './styles/licenses.scss'

export function Licenses() {
  return (
    <>
      <section className="section section--dark">
        <Separator size="small" />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header cats__header">
              <div className="section__header-title">
                <strong>Разрешения</strong>
              </div>
            </div>
            <div className="section__licenses">
              <p>
                В СОСТАВЕ ГРУППЫ «PROJECT CONCTRUCTION GROUP»: ГОС. ЛИЦЕНЗИИ И
                АККРЕДИТАЦИИ
              </p>
              <p>НА ПРАВО УПРАВЛЕНИЯ ПРОЕКТАМИ</p>
              <ul>
                <li>
                  в области архитектуры, градостроительства и строительства
                  (Д)(С)
                </li>
              </ul>
              <p>НА ПРОЕКТНУЮ ДЕЯТЕЛЬНОСТЬ</p>

              <ul>
                <li>
                  I категория, на все объекты 1,2,3 уровней ответственности; (S)
                </li>
                <li>
                  II категория, на объекты 3 и 2 уровней ответственности; (S)
                </li>
              </ul>
              <p>НА ИСПЫТАТЕЛЬНУЮ ЛАБОРАТОРИЮ</p>
              <ul>
                <li>
                  конструкций ж/б, металлоконструкций, котлы, трубы,фитинги; (Д)
                </li>
              </ul>
              <p>
                НА ПРАВО ОСУЩЕСТВЛЕНИЯ ОБЯЗАТЕЛЬНОЙ КОМПЛЕКСНОЙ ВНЕВЕДОМСТВЕННОЙ
                ЭКСПЕРТИЗЫ
              </p>
              <ul>
                <li>
                  проектов, предназначенных для строительства
                  (технико-экономических обоснований и проектно-сметной
                  документации) (К)
                </li>
              </ul>
              <p>НА ЭКСПЕРТНЫЕ РАБОТЫ ПО ТЕХНИЧЕСКОМУ ОБСЛЕДОВАНИЮ</p>
              <ul>
                <li>
                  надежности и устойчивости зданий и сооружений на технически и
                  технологически сложных объектах 1 и 2 уровней ответственности
                  (Д) (S)
                </li>
              </ul>
              <p>НА ИНЖИНИРИНГОВЫЕ УСЛУГИ ПО ТЕХНИЧЕСКОМУ НАДЗОРУ</p>
              <ul>
                <li>
                  на технически и технологически сложные объекты, 1-го уровня
                  ответственности (Д) (С)
                </li>
              </ul>
              <p>СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ</p>
              <ul>
                <li>
                  II категория, на все объекты 2 и 3 уровней ответственности;
                  (Е)
                </li>
                <li>
                  III категория, на объекты 3 и 2 уровней ответственности; (Д)
                </li>
              </ul>
              <p>
                АККРЕДИТАЦИЯ СОТРУДНИКОВ НА ПРОВЕДЕНИЕ ТЕХНИЧЕСКОГО НАДЗОРА,
                АУДИТА
              </p>
              <p>
                НА ГЛАВНОГО ИНЖЕНЕРА, АРХИТЕКТОРА ПРОВЕДЕНИЕ АВТОРСКОГО НАДЗОРА
              </p>
            </div>
          </div>
          <div className="section__body-col">
            <Image.PreviewGroup>
              <Image src="src/assets/images/licenses/doc1.png" />
              <Image src="src/assets/images/licenses/doc2.png" />
            </Image.PreviewGroup>
          </div>
        </div>
        <Separator size="small" />
      </section>
    </>
  )
}
