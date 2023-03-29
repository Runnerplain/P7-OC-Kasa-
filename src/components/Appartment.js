import React from 'react';
import "../styles/layout/Appartment.scss"
import { NavLink } from 'react-router-dom';

const Appartment = () => {
    return (
        <div className='appartment'>
            <NavLink to='/productHouse'>
                <div className="appartment__sub">Titre de la location</div>
            </NavLink>
        </div>
    );
};

export default Appartment;