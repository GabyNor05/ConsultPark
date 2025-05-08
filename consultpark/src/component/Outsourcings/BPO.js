import React from 'react';
import InfoCard from './InfoCards';
import InfoCard2 from './InfoCards2';
import './BPO.css';

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
        <div className='bg-gray-200 w-full py-8'>
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

            <div className='self-center'>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0'>Workflow Automation & Efficiency Audits</h1>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0'>Remote Workforce Strategy</h1>
              <h1 className='infoText text-3xl pl-8 m-8 mr-0'>Custom Business Solutions</h1>
              <div className='w-80 bg-green-700 m-auto rounded-full cursor-pointer'>
                <h2 className='p-6 text-zinc-200 text-center text-xl'>Get a Free Consultation</h2>
              </div>
            </div>
          </div>

          <h1 className='text-center text-green-800 text-6xl'>How it works</h1>
          <h2 className='text-center text-3xl pt-16'>Seamless Outsourcing in 4 Simple Steps</h2>
          <div className='w-fit m-auto grid gap-8 grid-cols-2 p-12'>
            {header2Text.map((item, index) => {
              return(<InfoCard2 key={index} message={item.Text} Title={item.Title} />)
            })}
          </div>

          <div className='w-4/5 m-auto'>
            <div className='Testimony1 h-[600px] my-16 rounded-xl p-16 overflow-hidden'>
              <div className='TestimonyWrapper'>
                <h1 className='text-6xl text-white'>"</h1>
                <h3 className='text-4xl text-white w-96 text-justify index-16'>Consult Park transformed our business! The remote team they provided has been 
                efficient, professional, and highly skilled.</h3>
                <h1 className='text-6xl text-white text-right'>"</h1>
              </div>
            </div>
          </div>

          <div className='w-4/5 m-auto'>
            <div className='Testimony2 h-[600px] my-16 rounded-xl p-16 overflow-hidden'>
              <div className='TestimonyWrapper'>
                <h1 className='text-6xl text-white'>"</h1>
                <h3 className='text-4xl text-white w-96 text-justify index-16'>Outsourcing our customer support to Consult Park was the best decision we made. 
                Our response time improved, and customer satisfaction skyrocketed!</h3>
                <h1 className='text-6xl text-white text-right'>"</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default Outsourcing;