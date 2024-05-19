'use client'

import { Switch } from '@/components/ui/switch'
import './fontStyles.css'
import { useTheme } from '../ThemeProvider'
import { Moon, MoonIcon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme()

  let Icon = theme === 'light' ? Sun : Moon

  return (
    <div className="mx-auto my-4 flex w-[300px] items-center justify-between">
      <div
        className={cn(
          ' text-4xl text-center flex-1   ',
          theme === 'light' ? 'text-black' : 'text-white'
        )}
      >
        MyWordle
      </div>
      <button onClick={toggleTheme}>
        <Icon fill="yellow" size={32} />
      </button>
    </div>
  )
}
