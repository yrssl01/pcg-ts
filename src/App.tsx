import './App.scss'
import { useAutoObserveScrollTitles } from './core/utils/useAutoObserveScrollTitles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/main'
import { HomePage } from './pages/homepage'
import { HomeLayout } from './layouts/home'
import { InnerLayout } from './layouts/inner'
import { Services } from './pages/services'
import { Projects } from './pages/projects'
import { ServicePage } from './pages/services/service-page'
import ScrollToTop from './core/utils/scrollToTop'
import { PageNotFound } from './pages/404'
import { NotFoundLayout } from './layouts/404'
import { ProjectPage } from './pages/projects/project-page'
import { Navigation } from './components/navigation'
import Menu from './components/menu'
import { AboutPage } from './pages/about'
import { MetricsPage } from './pages/metrics'
import { LicensesPage } from './pages/licenses'
import { PartnersPage } from './pages/partners'
import { ContactsPage } from './pages/contacts'

function App() {
  useAutoObserveScrollTitles()

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route element={<InnerLayout />}>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/metrics" element={<MetricsPage />} />
              <Route path="/services/" element={<Services />} />
              <Route path="/services/:serviceSlug" element={<ServicePage />} />
              <Route path="/projects/" element={<Projects />} />
              <Route path="/projects/:projectSlug" element={<ProjectPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/licenses" element={<LicensesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Route>
          <Route element={<NotFoundLayout />}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
