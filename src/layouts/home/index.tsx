import { Outlet } from 'react-router-dom'
import { HeaderSection } from '../../sections/header'
import { Header } from '../../sections/header/header'
import Menu from '../../components/menu'

export function HomeLayout() {
  return (
    <>
      <div className="home">
        <Menu />
      </div>
      <HeaderSection headerSlot={<Header />} />
      <Outlet />
    </>
  )
}
