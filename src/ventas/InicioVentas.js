import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import DashboardClientes from './clientes/DashboardClientes'

export default function InicioVentas() {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}> {/* "basepath" que en este caso equivale a "ventas"*/}
            <Route index element={<InicioVentasLayout />} />
            <Route path="dashboard-clientes" element={<DashboardClientes />}/>
        </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
    return (
        <div className="container">
            <h1>Ventas</h1>
            {/* <Link to=dashboard-clientes">  podemos usar rutas relativas*/}
            <Link to="/ventas/dashboard-clientes"> {/* o absolutas*/}
                <button>Clientes</button>
            </Link>
        </div>
    )
}
