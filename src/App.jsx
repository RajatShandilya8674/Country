import Header from './Components/Header.jsx'
import { Outlet } from 'react-router-dom'
import { themeContext} from './Contexts/ThemeContext.js'

import './App.css'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark]= useState(JSON.parse(localStorage.getItem("isDarkMode")))
  
  return (
    <>
    <themeContext.Provider value={[isDark, setIsDark]}> 
      {/* <ThemeProvider /> */}
      <Header />
      <Outlet />
    </themeContext.Provider>
    </>

  )
}

export default App
