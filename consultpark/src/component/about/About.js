import React from 'react';
import Header from './Header';
import Cards from './Cards';
import handshake from "../../assets/about/handshake.png";
import idea from "../../assets/about/idea.png";
import rocket from "../../assets/about/rocket.png";
import globe from "../../assets/about/worldwide.png";
import Footer from './Footer';

function Home() {
    return(
      <div >
        <Header />
        <div className='heading'>
        <h1>Our Mission & Vision</h1>
        </div>
        <div className='about-text'>
          
          <h2>Our mission is simple: Empower businesses with seamless outsourcing solutions that drive success.
          We envision a world where businesses of all sizes can access high-quality, cost-effective talent without the constraints of location or infrastructure.
          </h2>

          <h2><span style={{fontWeight: "bold"}}>Mission:</span> Empower businesses globally by connecting them with skilled virtual teams, driving efficiency, collaboration, and growth, while creating impactful career opportunities for professionals.</h2>

          <h2><span style={{fontWeight: "bold"}}>Vision:</span> To become the premier outsourcing partner, transforming global workforce solutions and fostering sustainable growth and innovation for businesses and communities worldwide.</h2>
        </div>

        <div className='heading'>
        <h1>Our Values</h1>
        </div>
        <div className='row-1'>
        <Cards image={idea} title = "Excellence" description = "We uphold the highest standards in everything we do. Committed to delivering high-quality outsourcing solutions and ensuring client satisfaction."/>
        <Cards image={handshake} title = "Integrity" description = "Transparency and trust are at the core of our partnerships. Operating with transparency, honesty, and ethical standards in every interaction."/>
        <Cards image={rocket} title = "Innovation" description = "We embrace technology and smart solutions to improve efficiency. Embracing forward-thinking strategies to provide creative and effective solutions"/>
        <Cards image={globe} title = "Global Reach" description = "We connect businesses with top-tier professionals worldwide. Contributing to economic development through career opportunities and international collaboration."/>
        </div>
     
        <Footer />
        
      </div>
    );
  }
  
  export default Home;

