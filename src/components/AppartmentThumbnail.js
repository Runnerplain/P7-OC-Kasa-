import React from 'react';
import "../styles/layout/AppartmentThumbnail.scss";
import { NavLink } from 'react-router-dom';

const AppartmentThumbnail = () => {
    return (
        <div className='appartment'>
            <NavLink to='/AppartmentPage'>
                <div className="appartment__sub">Titre de la location</div>
            </NavLink>
        </div>
    );
};

export default AppartmentThumbnail;