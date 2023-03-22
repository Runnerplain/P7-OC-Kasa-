import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner'
import AppartmentCards from './AppartmentCards';
import "../styles/App.scss";
import Main from "./Main"


const App = () => {
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



export default App;
