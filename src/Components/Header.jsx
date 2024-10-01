import { useContext, useState } from "react"
import { themeContext } from "../Contexts/ThemeContext"

export default function Header() {
  const [isDark, setIsDark]= useContext(themeContext)

  // if(isDark){
  //   document.body.classList.add("dark")

  // }else{
  //   document.body.classList.remove("dark")

  // }
  // const [mode, setMode]= useState("light")

    return (
      <header className={`header-container ${isDark? "dark":""}`}>
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={()=>{
            localStorage.setItem("isDarkMode", !isDark)
            setIsDark(!isDark)
          }}>
            <i className={`fa-solid fa-${isDark?"sun":"moon"}`} />
            &nbsp;&nbsp;{`${isDark?"Light":"Dark"}`} Mode
          </p>
        </div>
      </header>
    )
  }