import './App.scss'
import { useAutoObserveScrollTitles } from './components/utils/useAutoObserveScrollTitles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/main'
import { HomePage } from './pages/homepage'
import { HomeLayout } from './layouts/home'
import { InnerLayout } from './layouts/inner'
import { Services } from './pages/services'
import { Projects } from './pages/projects'
import { ServicePage } from './pages/services/service-page'

function App() {
  useAutoObserveScrollTitles()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<InnerLayout />}>
            <Route path="/services/" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServicePage />} />
            <Route path="/projects/" element={<Projects />} />
            <Route path="/projects/:projectId" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
