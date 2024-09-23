
import { useTheme } from '../../hooks/UseTheme'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'blue']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {theme === 'light' && 'Switch to Dark'}
      {theme === 'dark' && 'Switch to Blue'}
      {theme === 'blue' && 'Switch to Light'}
    </button>
  )
}