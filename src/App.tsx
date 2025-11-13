import './App.scss'
import { useScrollTitlesInit } from './components/utils/useScrollTitlesInit'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/main'
import { HomePage } from './pages/homepage'
import { HomeLayout } from './layouts/home'
import { InnerLayout } from './layouts/inner'

function App() {
  useScrollTitlesInit()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<InnerLayout />}>
            <Route path="/services/:servicesId" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
