import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { Projects } from './projects'
import { Services } from './services'
import { Partners } from './partners'
import { Licenses } from './licences'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <Services />
      <Projects />
      <Partners />
      <Licenses />
    </>
  )
}
