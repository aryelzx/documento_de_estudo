import React, {useCallback, useState} from 'react'
import Lista from '../components/Lista'
import ListaDeObjetos from '../components/ListaDeObjetos'
export default function Others() {
  return(
    <div className='flex justify-center w-100 items-center  p-2'>
      {/* <Lista/> */}
      <ListaDeObjetos/>
    </div>
  )
}
