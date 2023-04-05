import React, {useCallback, useState} from 'react'

export default function Others() {
  //estado para armazenar a lista de itens
  const [lista, setLista] = useState<string[]>(['Item1', 'Item2', 'Item3'])
  //função para adicionar um item na lista
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    //se a tecla pressionada for enter
    if(e.key === 'Enter'){
      //se o valor do input for vazio, não faz nada || trim remove os espaços em branco
      if(e.currentTarget.value.trim().length === 0) return;
      //pega o valor do input
      const value = e.currentTarget.value;
      //limpa o input
      e.currentTarget.value = '';
      //adiciona o valor no array
      setLista((oldLista) => {
        //se o valor já existir na lista, não faz nada
        if(oldLista.includes(value)) return oldLista;
        //retorna um novo array com o valor adicionado
        return [...oldLista, value]
      })
    }
  },[])

  return (
    <div>
      <p>Lista</p>

      <input
        className='border-2 border-black rounded-md p-2'
        onKeyDown={handleInputKeyDown}
      />

      <ul>
        {/*percorre a lista e renderiza os itens*/}
        {lista.map((value, index) => {
          return <li key={index}>{value}</li>
        } )}
      </ul>
    </div>
  )
}
