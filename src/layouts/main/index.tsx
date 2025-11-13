import { Outlet } from 'react-router-dom'
import { GridLines } from '../../components/grid'
import { Feedback } from '../../sections/feedback'
import { Footer } from '../../sections/footer'

export function MainLayout() {
  return (
    <>
      <GridLines />

      <Outlet />

      <Feedback />
      <Footer />
    </>
  )
}
