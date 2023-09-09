import React from "react";
import { BrowserRouter , Route, Link, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import Transferencias from "./Transferencias";
import Header from "./Header";

const Layout = () => {
  return (
    <BrowserRouter>
    <header>
        <Link to="/">Inicio</Link>
        <Link to="/transferencias">Transferencias</Link>
    </header>
    <Routes>   
        <Route path="/" exact element={Inicio} />
        <Route path="/transferencias" element={Transferencias} />
    </Routes>
    </BrowserRouter>
  );
};

export default Layout;
