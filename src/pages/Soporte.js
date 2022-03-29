import React from 'react'
import { Link } from 'react-router-dom'

export default function Soporte(props) {
  return (
    <div className='container'>
        <h1>Ayuda</h1>
        {props.children}
        <p>Contacte con su administrador en el 900 000 000</p>
        <Link to="/"> {/* to recibe ruta relativa o absoluta */}
            <button>Regresar a inicio</button>
        </Link>
    </div>
  )
}
