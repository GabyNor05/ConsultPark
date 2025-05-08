import React from 'react';
import './Contact.css';

function Contact() {
    return(
      <div className='ContactSection flex justify-end'>
        <div className='ContactForm m-24 rounded-xl h-fit p-8'>
          <h1 className='text-xl w-full m-auto text-center text-zinc-800 font-bold border-b-2 border-green-900'>Let’s Connect & Build Your Dream Team!</h1>
          <div className='contactInfoBlock p-2 px-12 m-4 border-b-2 border-green-900'>
            <h1 className='text-zinc-800 text-2xl text-left'> Phone: +12345678 or +12345678 </h1>
            <h1 className='text-zinc-800 text-2xl text-left'> Email: hr@consult.com </h1>
            <h1 className='text-zinc-800 text-2xl text-left'> Website: www.consult.com  </h1>
            <h1 className='text-zinc-800 text-2xl text-left'> Location: 15 Bedford Centurion </h1>
          </div>

          <div className='w-fit bg-green-700 m-auto rounded-full cursor-pointer btn transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-900 ...'>
            <h2 className='p-6 text-zinc-50 text-center text-xl'>Book a Free Consultation</h2>
          </div>

          <h2 className='text-sm text-zinc-600 w-3/5 text-left pt-5'>"Empowering Businesses, Connecting Talent, Driving Global Success." </h2>

          <div>
            <h1 className='text-2xl text-zinc-600 pt-4 font-semibold'>Virtual Team Recruitment </h1>
            <h1 className='text-lg text-zinc-600'>Talent</h1>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Information Technology</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Design and Creative</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Marketing and Sales</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Finance & Accountingy</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Human Resources</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Operations and Administrationy</div>
            <div className='border-l-2 pl-2 my-2 border-green-900 text-zinc-600'>Specialised Roles</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;