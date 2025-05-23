import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Outsourcing from './component/Outsourcings/BPO';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/outsourcing" element={<Outsourcing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


    </div>
    
  );
}

export default App;