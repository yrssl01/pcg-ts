import './styles/styles.scss'
import { About } from './about'
import { Metrics } from './metrics'
import { Projects } from './projects'

export function SectionBody() {
  return (
    <>
      <About />
      <Metrics />
      <Projects />
    </>
  )
}
