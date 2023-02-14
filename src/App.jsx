import './styles/global.css'
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
export default function App() {
/*
  Todos os componentes que serão renderizados dentro do RouterProvider, Precisam estar no App.jsx
*/  
const { theme } = useContext(ThemeContext); // 7- pegando o tema do ThemeContext
return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""} `}  > {/* 8- adicionando a classe dark-theme caso o tema seja dark */}
      <Header />
      <Outlet /> {/* 6- renderizando o componente da rota filho*/}
    </div>
  )
}

