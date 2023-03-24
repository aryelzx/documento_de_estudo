import React from 'react'

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset" ;
  onClick?: () => void;
  children?: React.ReactNode;
} //interface para tipar as propriedades do componente
//passando as propriedades do componente como parâmetro da função
export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
  return (
    <div>
      <button
        type={type}  //type é uma propriedade do button
        onClick={onClick}> 
        {children}
      </button>
    </div>
  )
}
