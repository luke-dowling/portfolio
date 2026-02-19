import './index.css'

import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.tsx'
import { ThemeProvider } from '@/context/ThemeContext'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
