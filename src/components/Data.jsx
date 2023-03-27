import React,{useState} from 'react'

export default function Data() {
  const [data, setData] = useState(new Date())
  setInterval(() => {
    setData(new Date())
  }, 1000)
  
  const opcoesDeData ={
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo'
  }
    return (
    <div>
      <h1>{data.toLocaleDateString('pt-BR', opcoesDeData)}</h1>
    </div>
  )
}
