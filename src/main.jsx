import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import './assets/css/dark_mode.css'
import './assets/js/script.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
