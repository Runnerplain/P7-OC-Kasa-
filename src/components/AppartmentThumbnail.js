import React from 'react';
import "../styles/layout/AppartmentThumbnail.scss";
import { NavLink } from 'react-router-dom';

const AppartmentThumbnail = (props) => {


    return (
            <NavLink className="LinkToAppartmentPage" to="./AppartmentPage" state={ {
                AppartmentId: props.id
            }}>
        <div className='appartment'>
            <img src={props.imageUrl} alt="" />
            <div className="appartment__sub">{props.title}</div>
        </div>
            </NavLink>
    );
};

export default AppartmentThumbnail;