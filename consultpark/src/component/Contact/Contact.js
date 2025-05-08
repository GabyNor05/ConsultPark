import React from 'react';
import './Contact.css';

function Contact() {
    return(
      <div className='ContactSection flex justify-end'>
        <div className='ContactForm bg-zinc-100 m-24 rounded-xl h-fit p-8'>
          <h1 className='font-size-2 w-full m-auto text-center'>Let’s Connect & Build Your Dream Team!</h1>
          <div className='m-auto w-[500px] p-4'>
            <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-700">
              First Name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="border border-emerald-700 block w-full rounded-md bg-zinc-200 px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-800"
              />
            </div>
          </div>

          <div className='m-auto w-[500px] p-4'>
            <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-700">
              Email 
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-emerald-700 block w-full rounded-md bg-zinc-200 px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-800"
              />
            </div>
          </div>

          <div className='m-auto w-[500px] p-4'>
            <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-700">
              Website
            </label>
            <div className="mt-2.5">
              <input
                id="Website"
                name="Website"
                type="text"
                autoComplete="Website"
                className="border border-emerald-700 block w-full rounded-md bg-zinc-200 px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:outline-green-800"
              />
            </div>
          </div>

          <div className='m-auto w-[500px] p-4'>
            <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-700">
              Location
            </label>
            <div className="mt-2.5">
              <input
                id="Location"
                name="Location"
                type="text"
                autoComplete="Location"
                className="border border-emerald-700 block w-full rounded-md bg-zinc-200 px-3.5 py-2 text-base text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:outline-green-800"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;