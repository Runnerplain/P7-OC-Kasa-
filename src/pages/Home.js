
import React from 'react';
import Navbar from '../components/layout/MainElements/Navbar';
import Banner from '../components/layout/MainElements/Banner'
import AppartmentCards from '../components/layout/MainElements/AppartmentCards';
import Main from "../components/Main";
import Footer from "../components/layout/MainElements/Footer"
import "../styles/pages/Home.scss";


const Home = () => {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner />
        <AppartmentCards />
      </Main>
      <Footer />

    </div>
  );
};


export default Home;
