import { Outlet } from 'react-router-dom'
import { Header } from '../../sections/header/header'

export function InnerLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}
