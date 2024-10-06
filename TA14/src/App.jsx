import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import StyledComponent from './components/StyledComponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <StyledComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;