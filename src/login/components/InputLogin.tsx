import React from 'react'
interface IInputLoginProps { //interface para tipar as propriedades do componente
  label: string;
  value: string;
  type?: string;
  onChange: (newValue: string) => void; //executa quando o valor do input mudar
  onPressEnter?: () => void; //executa quando teclar enter
}
//forwardRef é usado para passar uma referência para o componente
export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) =>{ 
  return (
    <div>
      <label>
              <span>{props.label}</span> 
              <input
              ref={ref} //ref é uma propriedade do input
              className='border-2 border-gray-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
              value={props.value} //value é uma propriedade do input
              type={props.type} //type é uma propriedade do input 
              onChange={e => props.onChange(e.target.value)} //onChange é um evento do input, que executa uma função quando o valor do input muda.
              //quando teclar enter, o foco vai para o input de senha.
              onKeyDown={e => e.key === 'Enter' && props.onPressEnter?.()}
               />
            </label>
    </div>
  )
})
