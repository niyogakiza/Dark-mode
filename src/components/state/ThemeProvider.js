import React, { useState, useEffect } from 'react'
import { ThemeContext } from './rootContext'
import { themes } from '../theme'

export const ThemeProvider = ({ children }) => {
  /** Default theme is light */
  const [ dark, setDark ] = useState(false)

  /** on mount, read the preffered theme from persistence */
  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])

  /** To toggle between dark and light modes */
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
        {children}
    </ThemeContext.Provider>
  )
}