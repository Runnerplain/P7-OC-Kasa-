import React from 'react';
import "../styles/layout/Navbar.scss"

function Navbar() {
    return <nav className='navbar'>
        <div className="navbar__logo">
            <img src="LOGO.svg" alt="Logo de Kasa" />
        </div>
        <div className="navbar__links">
            <div>Accueil</div>
            <div>A propos</div>
        </div>
    </nav>
}

export default Navbar;