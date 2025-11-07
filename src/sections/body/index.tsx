import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { Projects } from './projects'
import { Services } from './services'
import { Partners } from './partners'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <Services />
      <Partners />
      <Projects />
    </>
  )
}
