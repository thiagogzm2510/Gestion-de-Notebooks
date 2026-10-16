import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GestionNetbooksApp from './Sistema.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GestionNetbooksApp />
  </StrictMode>,
)
