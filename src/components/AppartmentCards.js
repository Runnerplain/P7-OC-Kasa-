import React from 'react';
import "../styles/layout/AppartmentCards.scss"
import Appartment from "../components/Appartment.js"
const AppartmentCards = () => {
    return (
        <div className='appartmentCards'>
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
            <Appartment />
        </div>
    );
};

export default AppartmentCards;