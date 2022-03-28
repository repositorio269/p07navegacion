import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderMenu() {
  return (
    <nav>
        <div>Logo</div>
        <div> {/* En isActive el componente NavLink nos devuelve true si
                  el valor de to corresponde con la ruta actual*/}
            <NavLink to="/" className={({isActive}) => isActive ? 'activo' : ''}>
                Inicio
            </NavLink>
            <NavLink to="/ventas" className={({isActive}) => isActive ? 'activo' : ''}>
                Ventas
            </NavLink>
            <NavLink to="/recursos-humanos" className={({isActive}) => isActive ? 'activo' : ''}>
                Recursos Humanos
            </NavLink>
            <NavLink to="/soporte" className={({isActive}) => isActive ? 'activo' : ''}>
                Ayuda
            </NavLink>
        </div>
    </nav>
  )
}
