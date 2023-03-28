/*
Para criar um hook personalizado no React, siga estes passos:

Escolha um nome descritivo para o seu hook. Geralmente, os nomes de hooks personalizados começam com "use", seguido por um verbo que descreve o que o hook faz. Por exemplo, "useContador" ou "useAPI".

Escreva uma função que encapsule a lógica do seu hook. Essa função deve seguir algumas regras:

-Ela deve começar com a palavra "function" e não com uma arrow function.
-Ela pode receber argumentos para configurar seu comportamento, se necessário.
-Ela deve retornar um array com dois valores: o primeiro valor é o estado que o hook gerencia e o segundo valor é uma função para atualizar o estado.
-Ela pode usar outros hooks do React, se necessário.
-Use o seu hook personalizado em seus componentes React. Para fazer isso, basta chamar a função que você criou, assim como faria com qualquer outro hook do React.

Hook personalizado para acessar o contexto de usuário logado.
ajuda em casos onde o contexto é acessado em mais de um componente.
*/

import { useContext } from "react";

import { UsuarioLogadoContext } from "../context";

export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
}