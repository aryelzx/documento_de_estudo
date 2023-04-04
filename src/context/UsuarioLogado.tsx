import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IUsuarioLogadoContextData { //interface para tipar as propriedades do componente
  nomeDoUsuario: string;
  user: {
    nome: string;
    email: string;
    senha: string;
  };
  logout: () => void;
}
//truque para tipar o contexto com o tipo da interface e passar um valor inicial para o contexto
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProviderProps { //interface para tipar as propriedades do componente
  children: React.ReactNode;
}

export const UsuarioLogadoProvider: React.FC <IUsuarioLogadoProviderProps> = ({ //FC é um tipo de componente funcional que recebe como parâmetro as propriedades do componente
  children}) => {
    const [nomeUsuario, setNomeDoUsuario] = useState(''); //estado para armazenar o nome do usuário	
    const [user, setUser] = useState({ //estado para armazenar o usuário
      nome: '',
      email: '',
      senha: '',
    });
    useEffect(() => { //função para buscar o nome do usuário no banco de dados
      setTimeout(() => { //simula uma busca no banco de dados
      setNomeDoUsuario('Aryel Ramos');
      setUser({
        nome: 'Aryel Ramos',
        email: 'ariel123@gmail.com',
        senha: '123456',
      });
      }, 2000);
    }, []);


    const handleLogoutFunction = useCallback(() => { //função para fazer o logout
      console.log('logout');
    }, []);

  return(
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario: nomeUsuario, user: user,  logout: handleLogoutFunction}}> {/*passa o valor inicial do contexto para o Provider*/}
      {children} {/*renderiza os filhos do componente*/}
    </UsuarioLogadoContext.Provider>
  ); 
};