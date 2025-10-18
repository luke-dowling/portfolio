import '@/styles/main.scss'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import App from './App.tsx'
import { ThemeProvider } from '@/context/ThemeContext'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
