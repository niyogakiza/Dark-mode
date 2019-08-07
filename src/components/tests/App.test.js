import React from 'react'
import { render, fireEvent } from './test-utils'
import App from '../App'

describe('<App/>', () => {
  test('renders with light mode default' , () => {
    const { getByTestId } = render(<App/>)
    expect(getByTestId('toggle-theme-btn')).toBeInTheDocument()
    expect(getByTestId('header')).toHaveStyle('background-color: white')
  })

  test('toggles the theme', () => {
    const { getByTestId } = render(<App/>)
    const toggleButton = getByTestId('toggle-theme-btn')
    fireEvent.click(toggleButton)
    expect(getByTestId('header')).toHaveStyle('background-color: black')
    fireEvent.click(toggleButton)
    expect(getByTestId('header')).toHaveStyle('background-color: white')
  })
})