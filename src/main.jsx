import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import tailwindConfig from '../tailwind.config.js'
import 'aos/dist/aos.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
