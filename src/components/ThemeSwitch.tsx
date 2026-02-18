import { FaMoon, FaSun } from 'react-icons/fa'

import { useTheme } from '@/hooks/useThemeContext'

export const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <button
      className={`relative z-30 p-0 text-[2.5rem] cursor-pointer hover:shadow-none ${theme === 'light' ? 'color-primary-black' : 'color-primary-white'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
