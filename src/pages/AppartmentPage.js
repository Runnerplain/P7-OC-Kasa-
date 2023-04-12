import React from 'react';
import Navbar from '../components/layout/MainElements/Navbar';
import Main from '../components/Main';
import Footer from '../components/layout/MainElements/Footer';
import ModelAppartment from '../components/layout/Appartment/ModelAppartment';

const AppartmentPage = () => {
    return (
        <div>
              <Main>
            <Navbar />
            <ModelAppartment />
            </Main>
            <Footer />
        </div>
    );
};

export default AppartmentPage;