import './App.css';
import "./components/shop.css"
import "./components/about.css"
import "./components/homepage.css"
import React from 'react';
import {Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import { SignupForm } from './components/Signup';
import Shop from './components/shop';
import About from './components/about';
import Veterinarians from './components/Veterinary';

function App() {
  console.log(window.location)
  return (
    <div className="App">
        <Routes>
          <Route exact="true" path= "/" element={<SignupForm />}/>
          <Route exact="true" path= "/home" element={<Homepage />}/>
          <Route exact="true" path='/veterinary' element={<Veterinarians />}/>
          <Route exact="true" path= "/shop" element={<Shop />}/>
          <Route exact="true" path= "/about" element={<About />}/>
        </Routes>
    </div>
  );
}

export default App;
