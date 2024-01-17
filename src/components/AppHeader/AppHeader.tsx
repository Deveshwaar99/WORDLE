'use client'
import { Switch } from '@/components/ui/switch'
import './fontStyles.css'
import { useTheme } from '../ThemeProvider'

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme()

  const textClassName = theme === 'light' ? 'text-black' : 'text-white'

  return (
    <header className="flex mx-auto justify-between items-center">
      <div className="mx-8"></div>
      <h1
        className={`text-center flex-grow text-4xl heading border-dotted border-red-500 ${textClassName}`}
      >
        MyWordle
      </h1>
      <div className="mx-4 border border-yellow-500">
        <Switch defaultChecked onCheckedChange={toggleTheme} />
      </div>
    </header>
  )
}
