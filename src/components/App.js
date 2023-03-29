import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import ProductHouse from './pages/ProductHouse';
import Error from "./pages/ErrorPage";
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/productHouse' element={<ProductHouse />} /> 
        <Route path='*' element={<ErrorPage />} errorElement= {<Error />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


