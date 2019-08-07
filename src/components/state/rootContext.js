
import React from 'react'
import { themes }from '../theme'

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}

export const ThemeContext = React.createContext(initialState)
