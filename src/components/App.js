import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from '../pages/About';
import AppartmentPage from '../pages/AppartmentPage';
import ErrorPage from '../pages/ErrorPage';
import Navbar from "../components/layout/MainElements/Navbar";

/**
 * 
 * @returns all Routes system. For everything else except those expected we have a error page redirection.
 */

const App = () => {


  // Modification post soutenance
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appartmentPage/:flatId' element={<AppartmentPage />} /> {/* changement post soutenance */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;


