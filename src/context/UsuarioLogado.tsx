import React, { createContext, useState } from 'react';

interface IUsuarioLogadoContextData { //interface para tipar as propriedades do componente
  nomeDoUsuario: string;
}
//truque para tipar o contexto com o tipo da interface e passar um valor inicial para o contexto
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps { //interface para tipar as propriedades do componente
  children: React.ReactNode;
}
export const UsuarioLogadoProvider: React.FC <IUsuarioLogadoProviderProps> = ({ //FC é um tipo de componente funcional que recebe como parâmetro as propriedades do componente
  children}) => {
  return(
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Aryel Ramos'}}> {/*passa o valor inicial do contexto para o Provider*/}
      {children} {/*renderiza os filhos do componente*/}
    </UsuarioLogadoContext.Provider>
  ); 
};