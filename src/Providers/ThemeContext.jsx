import React, { createContext } from 'react'
import { useState } from 'react'

export const myTheme=createContext()


export default function ThemeContext({children}) {
 
const [theme,setNewTheme]=useState('light')

const changeTheme=(newTheme)=>{
    setNewTheme(newTheme)
}
  
const projectedTheme=theme==='light'?'light-theme':theme==='dark'?'dark-theme':'funky-theme'
       return (
        <div className={projectedTheme}>

    <myTheme.Provider value={{theme,changeTheme}}>
        {children}
    </myTheme.Provider>
        </div>
  )
}
