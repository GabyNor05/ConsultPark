import React from 'react';
import Header from './Header';
import WhyUsCards from './Cards';

function Home() {
    return(
      <div >
        <Header />
        <div className='about-Text'>
          <h1>ABOUT</h1>
          <h2>Consult Park specializes in outsourcing virtual teams to support international companies in achieving their business goals. By connecting organizations with skilled professionals, Consult Park enables businesses to enhance productivity, streamline operations, and scale effectively. The company is committed to delivering tailored solutions that align with the unique needs of each client, fostering growth and innovation across industries.</h2>
        </div>
        <WhyUsCards />

        <div> Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
      </div>
    );
  }
  
  export default Home;