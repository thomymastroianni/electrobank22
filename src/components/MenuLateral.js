import React from 'react';
import './styles/MenuLateral.css';

function MenuLateral() {
  return (
    <div className="menu-lateral">
      <ul>
            <li>
                <a href="Inicio.js">Inicio</a>
            </li>
            <li>
                <a href="Cuentas.js">Cuentas</a>
            </li>
            <li>
                <a href="Transferencias.js">Transferencias</a>
            </li>
            <li>
                <a href="Pagos.js">Pagos</a>
            </li>
      </ul>
    </div>
  );
}

export default MenuLateral;