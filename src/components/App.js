import React, { useContext } from 'react'
import { ThemeContext } from './state/rootContext';


const App = () => {
  const { theme, dark, toggle } = useContext(ThemeContext)
  return (
    <div className="App">
    <header
    className='App-header'
    style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    data-testid='header'
    >
    <button
      type='button'
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        outline: 'none'
      }}
      data-testid='toggle-theme-btn'
      >
      Toggle to {!dark ? 'Dark' : 'Light'} theme 
      </button>

    </header>
      
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      
    </div>
  );
}

export default App