import React, {useContext} from 'react'

import { ThemeContext } from '../context/ThemeContext'
import { TesteContext } from '../context'

import Data from '../components/Data'
import ChangeTitleOfPage from '../components/ChangeTitleOfPage'

import { useUsuarioLogado } from '../hooks'

function Home() {
  //importando o contexto
  const {Teste} = useContext(TesteContext)
  const{ theme, toggleTheme} = useContext(ThemeContext)

  //exemplo com o Hook personalizado
  const {nomeDoUsuario} = useUsuarioLogado() // 9- pegando o nome do usuário do contexto
  

  return (
    <div className={`${theme === "dark" ? "h-[84vh] w-full bg-black text-yellow-500" : "" } ` }>
      <h1 className='text-5xl'>
        HOME
      </h1>
      <button className={`${theme === "dark" ? "p-2 bg-slate-800 text-yellow-500" : ""}`} onClick={toggleTheme}>Mudar tema</button>
      <p className={`${theme === "dark" ? "p-2 bg-black text-yellow-500" : ""}`}> O tema atual é: {theme}</p>
      <p className={`${theme === "dark" ? "p-2 bg-black text-yellow-500" : ""}`}> O usuário logado é: {nomeDoUsuario}</p>
      <Data />
      <ChangeTitleOfPage/>
      <p className={`${theme === "dark" ? "p-2 bg-black text-yellow-500" : ""}`}>{Teste}</p>
    </div>
  )
}

export default Home