import React from 'react';
import './Contact.css';

function Contact() {
    return(
      <div className='ContactSection flex justify-end'>
        <div className='ContactForm bg-zinc-100 m-24 rounded-xl h-fit p-8'>
          <h1 className='text-xl w-full m-auto text-center text-zinc-800 font-bold bo'>Let’s Connect & Build Your Dream Team!</h1>
          <div className='contactInfoBlock rounded-xl p-2 px-12 m-4'>
            <h1 className='text-zinc-800 text-3xl text-left'> Phone: +12345678 or +12345678 </h1>
            <h1 className='text-zinc-800 text-3xl text-left'> Email: hr@consult.com </h1>
            <h1 className='text-zinc-800 text-3xl text-left'> Website: www.consult.com  </h1>
            <h1 className='text-zinc-800 text-3xl text-left'> Location: 15 Bedford Centurion </h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;