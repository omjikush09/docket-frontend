import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Availability from './pages/Availability';
import Home from './pages/Home';
import Integrations from './pages/Integrations';

 const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/availability" element={<Availability/>} />
        <Route  path="/integrations" element={<Integrations/>} />

        </Routes>    
      </BrowserRouter>
  )
};

export default Router;