import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


// future={{
//   v7_startTransition: true,
//   v7_relativeSplatPath: true,
// }}

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
)
