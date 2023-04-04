import React from 'react';
import "../../styles/layout/ModelAppartment.scss";
import AppartmentDescription from './AppartmentDescription';
import AppartmentBanner from './AppartmentBanner';
import AppartmentTitle from './AppartmentTitle';
import AppartmentAside from './AppartmentAside';

const ModelAppartment = () => {
    return (
        <section className='appartmentPage'>
            <AppartmentBanner />
            <div className="appartmentHeader">
                <AppartmentTitle />
                <AppartmentAside />
            </div>            
                <div className="appartment__carousel">
                    <AppartmentDescription />
                    <AppartmentDescription />
                </div>
        </section>
    );
};

export default ModelAppartment;