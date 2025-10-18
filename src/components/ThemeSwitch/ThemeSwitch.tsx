import './_themeSwitch.scss'

import { FaMoon, FaSun } from 'react-icons/fa'

import { useTheme } from '@/hooks/useThemeContext'

export const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme()
  return (
    <button className='theme-switch' onClick={toggleTheme}>
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
