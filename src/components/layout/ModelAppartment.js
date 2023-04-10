import React, { useState } from 'react';
import "../../styles/layout/ModelAppartment.scss";
import DescriptionPan from './DescriptionPan';
import AppartmentBanner from './AppartmentBanner';
import AppartmentTitle from './AppartmentTitle';
import AppartmentAside from './AppartmentAside';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const ModelAppartment = () => {
    const location = useLocation();
    const [flat, setFlat] = useState(null)
    useEffect(fetchAppartmentData, [])

    function fetchAppartmentData() {
        fetch("db.json")
            .then((res) => res.json())
            .then((flats) => {
                const flat = flats.find(flat => flat.id === location.state.AppartmentId);
                setFlat(flat)
            })
            .catch(console.error)
    }
    if (flat == null) return <div>...Loading</div>;


    return (
        <section className='appartmentPage'>
            <AppartmentBanner pictures={flat.pictures}/>
            <div className="appartmentHeader">
                <AppartmentTitle flat={flat} />
                <AppartmentAside flat={flat} />
            </div>
            <div className="appartment__pan">
                <DescriptionPan title="Description" content={flat.description}/>
                <DescriptionPan title="Equipements" content={flat.equipments.map((eq, index) => <li key={index}>{eq}</li>)}/>
            </div>
        </section>
    );
};

export default ModelAppartment;