import React from 'react';
import "../../../styles/layout/AppartmentThumbnail.scss";
import { NavLink } from 'react-router-dom';





/**
 * @function
 * @param {Object} props - property of thumbnails
 * @param {string} props.title - title of apartment
 * @param {string} props.imageUrl - Url for picture of apartment
 * @param {string} props.id - Apartment unique id 
 * @returns {JSX.Element} JSX Element for apartment's thumbnail
 */
const AppartmentThumbnail = (props) => {
    

    return (
            <NavLink className="LinkToAppartmentPage" to={`./AppartmentPage/${props.id}`} >
        <div className='appartment'>
            <img src={props.imageUrl} alt="" />
            <div className="appartment__sub">{props.title}</div>
        </div>
            </NavLink>
    );
};

export default AppartmentThumbnail;