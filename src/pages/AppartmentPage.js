import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ModelAppartment from '../components/layout/ModelAppartment';

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