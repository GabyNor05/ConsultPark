import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Consult-Park-Logo-Full.png";

function Navbar() {
  return (
    <nav className="navbar" >
      <img className = "logo" src={logo} alt="Consult Park"  />
      <div className = "nav-link" >
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/outsourcing" className="nav-link">Outsourcing</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;