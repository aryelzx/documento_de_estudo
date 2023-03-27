import React from 'react'

export default function ChangeTitleOfPage() {
  const docTitle = document.title = "Home"
  window.addEventListener('blur', () => {
    document.title = "Volte logo"
  })
  window.addEventListener('focus', () => {
    document.title = docTitle
  })
  return (
    <div>Ao mudar de página, o títula irá mudar!</div>
  )
}
