import React from 'react';
import { useParams } from 'react-router-dom';
import ModelAppartment from '../components/layout/Appartment/ModelAppartment';


const AppartmentPage = () => {

    const { flatId } = useParams();


        
        return (
            <div>
                    <ModelAppartment flatId={flatId} /> {/*changement post soutenance */}     
            </div>
        );
    } 


export default AppartmentPage;