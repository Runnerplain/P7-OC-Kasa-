import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/MainElements/Navbar';
import Main from '../components/Main';
import Footer from '../components/layout/MainElements/Footer';
import ModelAppartment from '../components/layout/Appartment/ModelAppartment';

const AppartmentPage = () => {

    const { flatId } = useParams();

    return (
        <div>
            <Main>
                <Navbar />
                <ModelAppartment flatId={flatId} />
            </Main>
            <Footer />
        </div>
    );
};

export default AppartmentPage;