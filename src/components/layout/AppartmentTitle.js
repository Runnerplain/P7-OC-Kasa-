import React from 'react';
import "../../styles/layout/AppartmentTitle.scss";


const AppartmentTitle = () => {
    return (
        <div className='appartment__title'>
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <h2>Paris, Île-de-France</h2>
                    <div className="appartment__title__tags">
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>
    );
};

export default AppartmentTitle;