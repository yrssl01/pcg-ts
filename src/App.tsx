import { HeaderSection } from './sections/header'
import './App.scss'
import { SectionBody } from './sections/body'
import { GridLines } from './components/grid'
import { useScrollTitlesInit } from './components/utils/useScrollTitlesInit'
import { Footer } from './sections/footer'
import { Feedback } from './sections/feedback'

function App() {
  useScrollTitlesInit()

  return (
    <>
      <GridLines />
      <HeaderSection />
      <SectionBody />
      <Feedback />
      <Footer />
    </>
  )
}

export default App
