import { Outlet } from 'react-router-dom'
import { HeaderSection } from '../../sections/header'
import { Header } from '../../sections/header/header'

export function HomeLayout() {
  return (
    <>
      <HeaderSection headerSlot={<Header />} />
      <Outlet />
    </>
  )
}
