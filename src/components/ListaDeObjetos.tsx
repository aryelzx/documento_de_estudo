import React, {useCallback, useState} from 'react'

interface IListItem {
  title: string;
  isSelected: boolean;
}
export default function Others() {
  const [lista, setLista] = useState<IListItem[]>([])
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    if(e.key === 'Enter'){
      if(e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = '';
      //adiciona o valor no array
      setLista((oldLista) => {
        //se o valor já existir na lista, não faz nada || some retorna true se pelo menos um item do array satisfazer a condição
        if(oldLista.some((listItem) => listItem.title === value)) return oldLista;
        //retorna um novo array com o valor adicionado
        return [...oldLista, {
            title: value,
            isSelected: false
          }]
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
      {/* mostra a quantidade de itens selecionados */}
      <p>{lista.filter((listItem) => listItem.isSelected).length}</p>
      <ul>
        {/*percorre a lista e renderiza os itens*/}
        {lista.map((ListItem) => {
          return <li
            className='cursor-pointer'
            key={ListItem.title}>
            <input 
              type="checkbox"
              checked={ListItem.isSelected}
              onChange={() => {
                //atualiza o estado da lista com o novo valor de isSelected
                // map percorre o array e retorna um novo array com os valores atualizados
                setLista(oldLista => {
                  return oldLista.map(oldListItem => {
                    //se o título do item for igual ao título do item clicado, inverte o valor de isSelected
                    const newIsSelected = oldListItem.title === ListItem.title 
                    ? !oldListItem.isSelected 
                    : oldListItem.isSelected;
                    //retorna um novo objeto com o valor de isSelected atualizado
                    return{
                      ...oldListItem,
                      isSelected: newIsSelected
                    }
                  })
                })
              }}
              />
              {/* mostra o título do item */}
            {ListItem.title}</li>
        } )}
      </ul>
    </div>
  )
}
