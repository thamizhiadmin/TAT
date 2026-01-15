import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/theme.scss'
import App from './App.tsx'
import { initAnalytics } from './lib/analytics'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

initAnalytics()
