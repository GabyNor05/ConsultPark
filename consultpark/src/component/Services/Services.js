import React from 'react';
import './servicesComps/Services.css'; // Corrected path to Services.css
import ServicesHeader from './servicesComps/ServicesHeader';
import ServicesAccordion from './servicesComps/ServicesAccordion'; // Ensure this path is correct
import Footer from '../Home/Footers'; // Ensure this path is correct

function Services() {
    return(
      <div>
        <ServicesHeader />

          <ServicesAccordion />
          <Footer />
      </div>
    );
}

export default Services;