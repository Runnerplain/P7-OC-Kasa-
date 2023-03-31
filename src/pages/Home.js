
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner'
import AppartmentCards from '../components/AppartmentCards';
import Main from "../components/Main";
import Footer from "../components/Footer.js"
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
