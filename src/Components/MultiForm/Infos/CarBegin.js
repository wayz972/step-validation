import React from 'react'
import './Card.css'
export default function CarBegin(props) {
  return (
    <div className='card'>
        <h1> 🍣 aide-nous à ravir tes papilles 🌶️</h1>
        <button onClick={()=>props.modifyIndex(2)}>COMMENCER</button>
    </div>
  )
}
