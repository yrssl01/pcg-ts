import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { Projects } from './projects'
import { ServicesSection } from './services'
import { Partners } from './partners'
import { Licenses } from './licences'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <ServicesSection />
      <Projects />
      <Partners />
      <Licenses />
    </>
  )
}
