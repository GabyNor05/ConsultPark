import React from 'react';
import InfoCard from './InfoCards';
import InfoCard2 from './InfoCards2';
import './BPO.css';
import Footer from './Footer';
import { Link } from "react-router-dom";

let headerText = [
  'Call Center & Help Desk Support',
  'Back-Office & Data Processing',
  'Technical Support',
  'HR & Payroll Management'
]

let header2Text = [
  {
    Title: 'Consultation',
    Text:'Tell us what you need, and we’ll customize a solution for you.'
  },
  {
    Title: 'Talent Matching',
    Text:'We handpick the best professionals to suit your requirements.'
  },
  {
    Title: 'Onboarding & Integration',
    Text:'Your team is seamlessly integrated into your operations.'
  },
  {
    Title: 'Ongoing Support & Optimization',
    Text:'We ensure continued efficiency and performance.'
  }
]

function Outsourcing() {
    return(
      <>
        <div className='bg-zinc-200 w-full pt-8'>
          <div className='w-fit m-auto grid gap-8 grid-cols-2 p-16'>
            {headerText.map((item, index) => {
              return(<InfoCard key={index} message={item} />)
            })}
          </div>

          <h1 className='text-center text-green-800 text-6xl'>Business Consulting & Optimization</h1>
          
          <div className='flex w-4/5 m-auto '>
            <div className='header1 w-2/3 h-[600px] my-16 rounded-xl p-16 overflow-hidden'>
              <div className='infoWindow w-[260px] h-[160px] p-4 text-zinc-200 rounded-md '>
                <h3 className='text-xl'>We don’t just provide talent—we help you optimize your business processes for maximum  efficiency.</h3>
              </div>
            </div>

            <div className='self-center '>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0 text-zinc-800'>Workflow Automation & Efficiency Audits</h1>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0 text-zinc-800'>Remote Workforce Strategy</h1>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0 text-zinc-800'>Custom Business Solutions</h1>
              <div className='w-80 bg-green-700 h-fit rounded-full cursor-pointer justify-end m-auto my-16 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900'>
                  <Link to="/contact" className="">
                    <h2 className='p-6 text-zinc-200 text-center text-xl'>Get a Free Consultation</h2>
                  </Link> 
                </div>
            </div>
          </div>

          <h1 className='text-center text-green-800 text-6xl'>How it works</h1>
          <h2 className='text-center text-3xl pt-16 text-zinc-800'>Seamless Outsourcing in 4 Simple Steps</h2>
          <div className='w-fit m-auto grid gap-8 grid-cols-2 p-12'>
            {header2Text.map((item, index) => {
              return(<InfoCard2 key={index} message={item.Text} Title={item.Title} />)
            })}
          </div>
          
          <div className='TestimonySection bg-zinc-400 py-8'>
            <div className='w-4/5 m-auto'>
              <div className='Testimony1 h-[600px] my-16 rounded-xl p-16 overflow-hidden'>
                <div className='TestimonyWrapper'>
                  <h1 className='text-8xl text-white w-fit'>"</h1>
                  <h3 className='text-4xl text-white w-96 text-justify index-16'>Consult Park transformed our business! The remote team they provided has been 
                  efficient, professional, and highly skilled.</h3>
                  <h1 className='text-8xl text-white text-right'>"</h1>
                </div>
              </div>
            </div>

            <div className='w-4/5 m-auto flex'>
              <div className='Testimony2 h-[600px] my-16 rounded-xl p-16 overflow-hidden w-[1200px]'>
                <div className='TestimonyWrapper'>
                  <h1 className='text-8xl text-white w-fit'>"</h1>
                  <h3 className='text-4xl text-white w-96 text-justify index-16'>Outsourcing our customer support to Consult Park was the best decision we made. 
                  Our response time improved, and customer satisfaction skyrocketed!</h3>
                  <h1 className='text-8xl text-white text-right'>"</h1>
                </div>
              </div>
              <div className='self-center m-auto'>
                <h1 className='text-center text-zinc-700 text-5xl'>Join Our Growing List of Happy Clients! </h1>
                <div className='w-80 bg-green-700 h-fit rounded-full cursor-pointer justify-end m-auto my-16 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900'>
                  <Link to="/services" className="">
                    <h2 className='p-6 text-zinc-200 text-center text-xl'>Get Started</h2>
                  </Link> 
                </div>
              </div>
            </div>

            <div>
              <div className='w-4/5 m-auto BlogSection h-[800px] rounded-xl'>
                <h2 className='text-2xl text-zinc-300 p-4'>Blog & Resources</h2>
                <h1 className='font-semibold text-zinc-100'>Stay ahead with expert insights on outsourcing, remote work, and business efficiency. </h1>
                <div className='float-right'>
                  <h1 className='infoText text-3xl pl-8 pr-16 m-8 mr-0 text-zinc-300 w-fit font-medium'>How to Scale Your Business with Virtual Staffing</h1>
                  <h1 className='infoText text-3xl pl-8 pr-16 m-8 mr-0 text-zinc-300 w-fit font-medium'>The Future of Remote Work & Why It Matters</h1>
                  <h1 className='infoText text-3xl pl-8 pr-16 m-8 mr-0 text-zinc-300 w-fit font-medium'>Top 5 Benefits of Outsourcing Your Business Operations</h1>

                  <div className='w-80 bg-green-700 h-fit rounded-full cursor-pointer justify-end m-auto my-16 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900 BlogButton'>
                    <h2 className='p-6 text-zinc-200 text-center text-xl'> Read More on Our Blog</h2>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
export default Outsourcing;