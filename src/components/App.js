import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from '../pages/About';
import AppartmentPage from '../pages/AppartmentPage';
import Error from "./Error";
import ErrorPage from '../pages/ErrorPage';

/**
 * 
 * @returns all Routes system. For everything else except those expected we have a error page redirection.
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/AppartmentPage' element={<AppartmentPage />} />
        <Route path='*' element={<ErrorPage />} errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


