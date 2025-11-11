import { ConfigProvider } from 'antd'
import ruRu from 'antd/locale/ru_RU'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={ruRu}>
    <StrictMode>
      <App />
    </StrictMode>
  </ConfigProvider>
)
