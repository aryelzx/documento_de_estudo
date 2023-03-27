/* passando filhos para componentes */
import React from 'react'

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset" ;
  onClick?: () => void;
  children?: React.ReactNode;
} //interface para tipar as propriedades do componente
//passando as propriedades do componente como parâmetro da função || desestruturando as propriedades do componente
export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
  return (
    <div>
      <button
        type={type}  //type é uma propriedade do button
        onClick={onClick}> 
        {children} {/*objeto que recebe os filhos do componente*/}
      </button>
    </div>
  )
}
