import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Login from "./pages/auth/Login"
import Availability from './pages/Availability';
import Home from './pages/Home';
import Integrations from './pages/Integrations';

 const Router = () => {
  const API:string |undefined = process.env.REACT_APP_BACKEND;
  console.log(process.env.REACT_APP_BACKEND)
  return (
      <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/availability" element={<Availability/>} />
        <Route  path="/integrations" element={<Integrations/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>    
      </BrowserRouter>
  )
};

export default Router;