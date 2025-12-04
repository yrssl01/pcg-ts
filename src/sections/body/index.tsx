import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { ProjectsSection } from './projects'
import { ServicesSection } from './services'
import { Partners } from './partners'
import { Licenses } from './licenses'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <ServicesSection />
      <ProjectsSection />
      <Partners />
      <Licenses />
    </>
  )
}
