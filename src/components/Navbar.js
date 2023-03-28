import React from 'react';
import "../styles/layout/Navbar.scss"
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <nav className='navbar'>
        <div className="navbar__logo">
            <img src="LOGO.svg" alt="Logo de Kasa" />
        </div>
        <ul className="navbar__links">
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='navbar__links__sub'>Accueil</li>
            </NavLink>
            <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='navbar__links__sub'>A propos</li>
            </NavLink>
        </ul>
    </nav>
}

export default Navbar;