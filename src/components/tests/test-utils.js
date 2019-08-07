import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../state/ThemeProvider'

const AllMyProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const CustomRender = (component, options) => {
  render(component, { wrapper: AllMyProviders, ...options })
}

/** re-export everything from the react-testing-library */
export * from '@testing-library/react'

/** export custom render method */
export { CustomRender as render }