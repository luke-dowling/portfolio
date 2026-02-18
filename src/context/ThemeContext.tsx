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
  let currentTheme = localStorage.getItem('theme') as Theme
  if (currentTheme !== 'light' && currentTheme !== 'dark') {
    currentTheme = 'dark'
  }

  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    document.documentElement.style.colorScheme = theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
