import React from 'react'
import { useState, useCallback, useMemo, useRef } from 'react'

function Contact() {
  /* useState é usado para criar um estado para o componente,
     o primeiro valor é o valor inicial do estado e o segundo
     é uma função para alterar o valor do estado */

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0);

  /* useRef é usado para criar uma referência para um elemento do DOM,
      ou seja, é possível acessar o elemento do DOM através da referência */
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  /*useMemo é usado para memorizar o valor de uma variável, 
    para que ela não seja recriada toda vez que o componente for renderizado */
  const nameLength = useMemo( () => {
    return name.length * 100;
  }, [name.length])

  /* useCallback é usado para memorizar uma função, para que ela não seja
   recriada toda vez que o componente for renderizado */
  const handleEntrar = useCallback(() => {
    console.log(name)
  },[name])

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  function Button({ onClick }) {
    console.log('Rendering button...');
  
    return <button onClick={onClick}>Increment count</button>;
  }


  return (
    <div className=' w-full border-2 flex h-28 bg-blue-700 rounded-xl items-center justify-center'>
      <div className='work'>
          <h1 className='text-5xl'>
            CONTACT
          </h1>
          <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} />
    </div>

          <p>Quantidade de caracteres no nome: {nameLength}</p>
          <form>
            <label>
              <span>Nome:</span>
              <input
               value={name}
               onChange={e => setName(e.target.value)}
               onKeyDown = {e => { e.key === 'Enter' && inputPasswordRef.current?.focus() }}
               />
            </label>
            <label>
              <span>Senha:</span>
              <input 
              ref={inputPasswordRef}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleEntrar}>Enviar</button>
          </form>
      </div>
    </div>
  )
}

export default Contact