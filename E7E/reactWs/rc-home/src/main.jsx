import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JiwonRouteProvider from './routes/JiwonRouteProvider.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
