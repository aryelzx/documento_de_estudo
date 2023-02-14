import React from 'react'
import logoHeader from "../assets/argel.svg"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className='flex items-center justify-evenly  border-2'>
      <img src={logoHeader} />
      <ul className='flex  gap-5 '>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}

