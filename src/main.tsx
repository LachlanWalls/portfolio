import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfolio from './Portfolio.tsx'
import './index.css'
import 'highlight.js/styles/base16/pasque.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
