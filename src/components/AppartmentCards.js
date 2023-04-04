import React from 'react';
import "../styles/layout/AppartmentCards.scss"
import AppartmentThumbnail from "../components/AppartmentThumbnail"

const AppartmentCards = () => {
    return (
        <div className='appartmentCards'>
            <AppartmentThumbnail />
            <AppartmentThumbnail />
            <AppartmentThumbnail />
            <AppartmentThumbnail />
            <AppartmentThumbnail />
            <AppartmentThumbnail />
        </div>
    );
};

export default AppartmentCards;