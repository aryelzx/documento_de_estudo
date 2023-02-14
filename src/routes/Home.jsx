import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Home() {
  const{ theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark" ? "h-[84vh] w-full bg-black text-yellow-500" : "" } ` }>
      <h1 className='text-5xl'>
        HOME
      </h1>
      <button className={`${theme === "dark" ? "p-2 bg-slate-800 text-yellow-500" : ""}`} onClick={toggleTheme}>Mudar tema</button>
      <p className={`${theme === "dark" ? "p-2 bg-black text-yellow-500" : ""}`}> O tema atual é: {theme}</p>
    </div>
  )
}

export default Home