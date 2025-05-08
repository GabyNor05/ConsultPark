import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h1>Consult Park</h1>
                    <div className="footer-links">
                        <Link to="/" >Home</Link>
                        <Link to="/about" >About Us</Link>
                        <Link to="/services" >Services</Link>
                        <Link to="/outsouring" >Outsourcing</Link>
                        <Link to="/contact" >Contact Us</Link>
                    </div>
                </div>

                <div className="footer-stats">
                    <div className="stat-item">
                        <h3>27</h3>
                        <p>Awards Won</p>
                    </div>
                    <div className="stat-item">
                        <h3>245+</h3>
                        <p>Projects</p>
                    </div>
                    <div className="stat-item">
                        <h3>99%</h3>
                        <p>Happy Customers</p>
                    </div>
                </div>

                <div className="footer-facts">
                    <h3>Some Facts About Us</h3>
                    <p>More than 1000 applications developed</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© 2025 Consult Park CO., LTD.</p>
                <div> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </footer>
    );
};

export default Footer;