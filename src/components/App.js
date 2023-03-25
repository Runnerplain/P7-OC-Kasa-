import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "../styles/App.scss";
import Home from "../components/pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='./src/components/pages/Home' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


