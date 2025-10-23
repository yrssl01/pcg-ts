import { Logo } from '../../components/logo'
import './styles.scss'
import { Separator } from '../../components/separ'

export function HeaderSection() {
  return (
    <>
      <section className="header section section__back">
        <video
          src=""
          autoPlay
          muted
          loop
          playsInline
          className="section__back section__back--video"
        >
          <source
            src="https://cdn.pixabay.com/video/2025/09/15/304330_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="header__header"></div>
        <Separator size="small" />
        <div className="header__body">
          <div className="header__body-col fullwidth">
            <div
              className="section__header scrolled margin-top"
              data-scroll="title"
            >
              <div className="section__header-title">
                Архитектура <strong>со смыслом</strong>
              </div>
              <div className="section__header-subtitle">
                Project Construction Group
              </div>
            </div>
          </div>
        </div>
        <Separator size="small" />
        <div className="header__footer"></div>
      </section>
    </>
  )
}
