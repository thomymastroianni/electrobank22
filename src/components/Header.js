import React from 'react';
import './styles/Header.css';
import Electrobank from '../images/ELECTOBANK-logo.png'
import { useLayout } from './LayoutContext';
import MenuLateral from './MenuLateral';

function Header() {
  const toggleMenu = () => {
    const menuLateral = document.querySelector('.menu-lateral');
    const bars = document.querySelectorAll('.bar');
    
    if (menuLateral.style.left === '-250px') {
        menuLateral.style.left = '0';
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        bars[0].style.backgroundColor = "white";
        bars[2].style.backgroundColor = 'white';
    } else {
        menuLateral.style.left = '-250px';
        bars[0].style.transform = 'rotate(0) translate(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0) translate(0)';
        bars[0].style.backgroundColor = "#370A73";
        bars[2].style.backgroundColor = "#370A73";
    }
  };

  return (
    <header className="encabezado">
      <h1><img className="logo" src={Electrobank} alt="Electrobank Logo" /></h1>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar" id="bar1" />
          <div className="bar" id="bar2" />
          <div className="bar" id="bar3" />
        </div>
      </nav>
    </header>
  );
}


export default Header;
