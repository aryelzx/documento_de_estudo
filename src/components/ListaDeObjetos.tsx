import React, {useCallback, useEffect, useState} from 'react'
import { ITarefa, TarefasService } from '../services/api/tarefas/TarefasService';
import { ApiException } from '../services/api/ErrorException';

 
export default function Others() {
  const [lista, setLista] = useState<ITarefa[]>([])
  
  //função para carregar a lista de itens. ou mostra erro, ou atualiza o estado da lista
  useEffect(() => {
      //chama a função getAll da api
      TarefasService.getAll()
      //se o resultado for uma instância de ApiException, mostra o erro
      .then((result) =>{
        if(result instanceof ApiException){
          alert(result.message)
        //se não, atualiza o estado da lista
        }else{
          setLista(result)        }
      })
  }, []) 
  //função para adicionar um novo item na lista
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    //se a tecla pressionada for enter
    if(e.key === 'Enter'){
      //se o valor do input for vazio, não faz nada
      if(e.currentTarget.value.trim().length === 0) return;
      //pega o valor do input
      const value = e.currentTarget.value;
      //limpa o valor do input
      e.currentTarget.value = '';
      //se o valor do input já existir na lista, não faz nada
      if(lista.some((listItem) => listItem.title === value)) return;
      //cria um novo item e adiciona na lista
      TarefasService.create({title: value, isCompleted: false})
      .then((result) => {
        //se o resultado for uma instância de ApiException, mostra o erro
        if(result instanceof ApiException){
          alert(result.message)
        //se não, atualiza o estado da lista
        }else{
          setLista((oldLista) => [...oldLista, result])
        }
      });     
    }
  }, [lista])

  const handleToggleComplete = useCallback((id: number) => {
    //pega o item que foi clicado
    const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id)
    if(!tarefaToUpdate) return;
    //atualiza o valor de isCompleted
    TarefasService.updateById(id, {
      //pega todos os valores do item e sobrescreve o valor de isCompleted
      ...tarefaToUpdate,
      //inverte o valor de isCompleted se for true, se for false, deixa como false
      isCompleted: !tarefaToUpdate.isCompleted,
    })
    //se o resultado for uma instância de ApiException, mostra o erro
    .then((result) => {
      if(result instanceof ApiException){
        alert(result.message)
      }else{
        //se não, atualiza o estado da lista
        setLista(oldLista => {
           return oldLista.map(oldListItem => {
            if(oldListItem.id === id) return result
            return oldListItem
             })
           })
      }
    })
    //atualiza o estado da lista com o novo valor de isCompleted
  },[lista])
  return (
    <div>
      <p>Lista</p>

      <input
        className='border-2 border-black rounded-md p-2'
        onKeyDown={handleInputKeyDown}
      />
      {/* mostra a quantidade de itens selecionados */}
      <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
      <ul>
        {/*percorre a lista e renderiza os itens*/}
        {lista.map((ListItem) => {
          return <li
            className='cursor-pointer'
            key={ListItem.id}>
            <input 
              type="checkbox"
              checked={ListItem.isCompleted}
              onChange={() => handleToggleComplete(ListItem.id)}
            />
              {/* mostra o título do item */}
            {ListItem.title}</li>
        } )}
      </ul>
    </div>
  )
}
