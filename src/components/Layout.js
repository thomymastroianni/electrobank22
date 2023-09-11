import React from "react";
import { BrowserRouter , Route, Link, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Transferencias from "./Transferencias";
import Header from "./Header";
import Pagos from "./Pagos";
import Cuentas from "./Cuentas";

const Layout = () => {
  return (
    <BrowserRouter>
    <header>
        <Link to="/">Inicio</Link>
        <Link to="/transferencias">Transferencias</Link>
        <Link to="/pagos">Pagos</Link>
        <Link to="/cuentas">Cuentas</Link>
    </header>
    <Routes>   
        <Route path="/" exact element={Inicio} />
        <Route path="/transferencias" element={Transferencias} />
        <Route path="/pagos" element={Pagos} />
        <Route path="/cuentas" element={Cuentas} />
    </Routes>
    </BrowserRouter>
  );
};

export default Layout;
