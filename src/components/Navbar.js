import React from 'react';
import "../styles/Navbar.css"

function Navbar() {
    return <nav className='navbar'>
        <div className="navbar__logo">
            <img src="LOGO.svg" alt="Logo de Kasa" />
        </div>
        <div>Accueil</div>
        <div>A propos</div>
    </nav>
}

export default Navbar;