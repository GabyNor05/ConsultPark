import React from 'react';
import Header from './Header';
import Cards from './Cards';
import coins from "../../assets/home/coins.png";
import clock from "../../assets/home/wall-clock.png";
import people from "../../assets/home/people.png";
import speak from "../../assets/home/rumor.png";
import gradCap from "../../assets/home/graduation-cap.png";
import office from "../../assets/home/office-building.png";
import target from "../../assets/home/target.png";
import chart from "../../assets/home/chart-up.png";
import Footer from './Footer';

function Home() {
    return(
      <div >
        <Header />
        <div className='heading'>
        <h1>About</h1>
        </div>
        <div className='about-text'>
          
          <h2>Consult Park specializes in outsourcing virtual teams to support international companies in achieving their business goals. By connecting organizations with skilled professionals, Consult Park enables businesses to enhance productivity, streamline operations, and scale effectively. The company is committed to delivering tailored solutions that align with the unique needs of each client, fostering growth and innovation across industries.</h2>
        </div>

        <div className='heading'>
        <h1>The Consult Park Advantage</h1>
        </div>
        <div className='row-1'>
        <Cards image={coins} title = "Reduce Costs" description = "Save up to 70% on operational expenses."/>
        <Cards image={clock} title = "Increase Efficiency" description = "Focus on growth while we handle the heavy lifting."/>
        <Cards image={people} title = "No Rigid Contracts" description = "Scale your workforce up or down as needed."/>
        <Cards image={speak} title = "Fluent & Culturally Aligned Communication" description = "Professionals trained for global markets."/>
        </div>
        <div className='row-1'>
        <Cards image={gradCap} title = "Highly Skilled & Certified Talent" description = "Experts in their fields, not just degree holders."/>
        <Cards image={office} title = "Office-Based Professionals" description = "Reliable, structured, and fully managed teams."/>
        <Cards image={target} title = "100% Dedicated Workforce" description = "Focused professionals committed to your success."/>
        <Cards image={chart} title = "Performance-Driven Approach" description = "Regular training and quality assurance for excellence"/>
        </div>
        
        <Footer />
        <div> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      </div>
    );
  }
  
  export default Home;

