
import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner'
import AppartmentCards from '../AppartmentCards';
import Main from "../Main";
import "../../styles/pages/Home.scss";


const Home = () => {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner />
        <AppartmentCards />
      </Main>
    </div>
  );
};


export default Home;
