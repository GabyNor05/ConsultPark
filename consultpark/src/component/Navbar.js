import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Consult-Park-Logo-Full.png";

function Navbar() {
  return (
    <div className="NavContainer">
      <nav className="navbar" >
        <img className = "CompanyLogo" src={logo} alt="Consult Park" />
        <div className = "nav-link text-6xl text-white" >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/outsourcing" className="nav-link">Outsourcing</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;