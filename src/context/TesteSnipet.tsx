// import React, {createContext } from 'react';

// interface IUserTesteData  {
//   nameUser: string;
// };

// export const UserTesteContext = createContext<IUserTesteData> ({} as IUserTesteData);


// interface IUserTesteProviderProps {
//   children: React.ReactNode;
// }

// export const UserTesteProvider: React.FC<IUserTesteProviderProps> = ({
//    children }) => {
//   return (
//     <UserTesteContext.Provider value={{nameUser: "harydade"}}>
//       {children}
//     </UserTesteContext.Provider>
//   );
// };
import React, { useContext, createContext } from 'react';

type Teste = {
  Teste: string;
};

export const TesteContext = createContext<Teste>({} as Teste);

interface TesteProviderProps {
children: React.ReactNode;
}

export const TesteProvider: React.FC<TesteProviderProps> = ({
  children }) => {
  return (
    <TesteContext.Provider value={{Teste: "isto é um Teste de snipet"}}>
      {children}
    </TesteContext.Provider>
  );
};
