import { Separator } from '../../components/separ'

export function About() {
  return (
    <>
      <section className="section">
        <Separator />
        <div className="section__body">
          <div className="section__body-col">
            <div className="section__header" data-scroll="title">
              <div className="section__header-title">
                Project <strong>Construction</strong> Group
              </div>
              <div className="section__header-subtitle">Информация о нас</div>
            </div>
            <div className="section__buttons">
              <a href="" className="button">
                Наш офис
              </a>
            </div>
          </div>
          <div className="section__body-col">
            <div className="section__content">
              <h1>Высокое качество и профессионализм</h1>
              <p>
                Наша компания — это команда профессионалов, объединённых идеей
                комплексного подхода к проектированию и строительству. Наша
                деятельность направлена на создание современных, функциональных
                и технологичных решений, соответствующих высоким требованиям
                современного рынка.
              </p>
              <p>
                С момента основания в 2007 году мы реализуем проекты различного
                уровня сложности. Наша команда сотрудничает с ведущими
                архитекторами, инженерами и подрядными организациями,
                обеспечивая полный цикл реализации — от замысла до ввода в
                эксплуатацию.
              </p>
              <button className="button-more">Читать больше</button>
            </div>
          </div>
        </div>
        <Separator border="bottom" />
      </section>
    </>
  )
}
