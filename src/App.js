import React from 'react';
import './App.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx'
import Services from './Services.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar.jsx';
import './index.css';
const App = ()=> {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path ='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Services' element={<Services/>}/>
            
          </Routes>
        </BrowserRouter>
        </>
  );
};

export default App;
