import { Separator } from '../../components/separ'
// import { Header } from '../../sections/header/header'

export function Services() {
  return (
    <>
      {/* <div className="header__header"></div> */}
      {/* <Header /> */}
      <Separator size="small" border="top" />
      <div className="section__body">
        <div className="section__body-col">
          <div className="section__header" data-scroll="title">
            <div className="section__header-title"></div>
            <div className="section__header-subtitle"></div>
          </div>
        </div>
        <div className="section__body-col"></div>
      </div>
    </>
  )
}
