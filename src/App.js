import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

const InicioVentas = React.lazy(() => import('./ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./rrhh/InicioRRHH'));

function App() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ventas/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
            <InicioVentas />
          </React.Suspense>
        } />
        <Route path="/recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
           <InicioRRHH />
          </React.Suspense>
        }/>
        <Route path="soporte" element={<Soporte />}/>
        {/* Como ruta default (por tanto la última) se usa * */}
        <Route path="*" element={
          <div className="container">  {/*Si el componente es muy sencillo se puede escribir directamente */}
            <p>Lo sentimos la página no existe</p>
            <Link to="/" ><button>Volver a inicio</button></Link>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
