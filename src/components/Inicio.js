import React from "react";
import Promociones from "./Promociones";
import Informacion from "./Informacion";
import MenuLateral from "./MenuLateral";
import Header from "./Header";

function Inicio () {
    return (
        <div>
            <Header />
            <MenuLateral />
            <Promociones />
            <Informacion />
        </div>
    );
}
export default Inicio;