import './styles.scss'

import { Outlet } from 'react-router-dom'
import { GridLines } from '../../components/grid'
import { Header } from '../../sections/header/header'

export function NotFoundLayout() {
  return (
    <>
      <GridLines />
      <main className="template-error">
        <section className="header section">
          <Header />
          <Outlet />
          <div className="header__footer"></div>
        </section>
      </main>
    </>
  )
}
