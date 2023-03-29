import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/pages/Error.scss";

const Error = () => {
    return (
        <div className='container'>
            <div className="container__sub">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <div className="linkHome">
                    <NavLink to='/'>
                        <p>Retourner sur la page d'accueil</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Error;