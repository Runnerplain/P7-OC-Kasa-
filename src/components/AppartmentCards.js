import React, { useEffect, useState } from 'react';
import "../styles/layout/AppartmentCards.scss"
import AppartmentThumbnail from "../components/AppartmentThumbnail"




const AppartmentCards = () => {
    const [appartments, setAppartments] = useState([0])

    useEffect(fetchAppartment, []);
    
    function fetchAppartment() {
    fetch('./db.json')
    .then((res) => (res.json())
    .then((res) => setAppartments(res)))
    .catch(console.error);
    }

    return (
        <div className='appartmentCards'>
            {appartments.map((appart, index) => (
                <AppartmentThumbnail key={index} title={appart.title} imageUrl={appart.cover} id={appart.id}/>
            ))}
        </div>
    );
};

export default AppartmentCards;