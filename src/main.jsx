import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Others from './routes/Others';

// 1- configurando router
import {createBrowserRouter, RouterProvider} from 'react-router-dom' // 2-importando o router
const router = createBrowserRouter([ // 3- criando o router
  { // 4- configurando as rotas
    path: "/", //
    element:  <App />,
    children: [{ // 4.1- definindo as rotas filhas para reaproveitamento do pai
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/others",
      element: <Others />,
    }
  ]
  },
])
import { ThemeProvider } from "./context/ThemeContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* 5- passando o theme para o ThemeProvider */}
      <RouterProvider router={router}/> {/* 5- passando o router para o RouterProvider */}
    </ThemeProvider>
  </React.StrictMode>,
)
