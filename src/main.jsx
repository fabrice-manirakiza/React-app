import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Checking from './Form.jsx'
import Adding from './Adding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Checking/>
    <Adding/>
  </StrictMode>,
)
