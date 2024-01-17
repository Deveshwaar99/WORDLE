'use client'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  useEffect(() => {
    // Apply the theme class to the body element
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
