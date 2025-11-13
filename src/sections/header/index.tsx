import { Logo } from '../../components/logo'
import './styles.scss'
import bgVideo from '../../assets/video/background-video.mp4'
import { Separator } from '../../components/separ'
// import { Header } from './header'

import type { ReactNode } from 'react'

type HeaderSectionProps = {
  headerSlot?: ReactNode
}

export function HeaderSection({ headerSlot }: HeaderSectionProps) {
  return (
    <>
      <section className="header section section__back">
        {headerSlot}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="section__back section__back--video"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Separator size="small" border="top" />
        <div className="section__body header__body">
          <div className="header__body-col fullwidth">
            <Logo className="header__logo" />
            <div className="section__header margin-top" data-scroll="title">
              <div className="section__header-title">
                Проектирование <strong>со смыслом</strong>
              </div>
              <div className="section__header-subtitle">
                Project Construction Group
              </div>
            </div>
          </div>
        </div>
        <Separator size="small" border="bottom" />
        <div className="header__footer"></div>
      </section>
    </>
  )
}
