
import React from 'react';
import Banner from '../components/layout/MainElements/Banner'
import AppartmentCards from '../components/layout/MainElements/AppartmentCards';
import Footer from '../components/layout/MainElements/Footer';
import "../styles/pages/Home.scss";


const Home = () => {
  return (
    <div>
        <Banner />
        <AppartmentCards />
        <Footer />
    </div>
  );
};


export default Home;
