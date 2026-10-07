'use client'

import { createContext, useEffect } from 'react'
import { useState, type ReactNode } from 'react'

import { type Theme } from '@/libs/types'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [hasLoadedTheme, setHasLoadedTheme] = useState(false)

  // localStorage only exists in the browser, so read the saved theme after mounting.
  // (The inline script in app/layout.tsx has already applied it to <html> before paint.)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
    setHasLoadedTheme(true)
  }, [])

  useEffect(() => {
    if (!hasLoadedTheme) return

    document.documentElement.style.colorScheme = theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [theme, hasLoadedTheme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
