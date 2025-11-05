import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { Projects } from './projects'
import { Services } from './services'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <Services />
      <Projects />
    </>
  )
}
