import { Outlet } from 'react-router-dom'
import { Header } from '../../sections/header/header'
import Menu from '../../components/menu'

export function InnerLayout() {
  return (
    <>
      <Menu />
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </>
  )
}
