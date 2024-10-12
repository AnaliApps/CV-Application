import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GeneralInformation from './components/CVDetails.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInformation />
  </StrictMode>,
)
