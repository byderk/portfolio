import React from 'react'
import profile from '../assets/profile.jpg';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='w-full flex flex-col p-6 items-end'>
      <div className='relative w-full space-y-4 sm:w-3/4 md:w-1/2'>
        <h1 className='text-5xl flex items-center justify-end gap-1 uppercase font-black'><span>C</span>
          <div className='relative w-12 h-12 opacity-100 rounded-full bg-orange-500 shadow-lg transition duration-150 hover:scale-110 group' src={profile}>
            <img src={profile} alt="profile" className='absolute rounded-full w-10 h-10 left-1 top-1' />
            <div className='absolute bottom-0 right-0 w-4 h-4 rounded-full bg-lime-500 group-hover:bg-lime-400 transition duration-500'/>
            <span className='absolute opacity-0 -top-4 -right-28 bg-slate-50 text-text-dark px-2 py-1 rounded-sm text-[10px] duration-1000 group-hover:opacity-100 w-max'>send me a message</span>
          </div>
        <span>nnect</span></h1>
        <p className='text-justify'>
          I am always eager to explore new opportunities, feel free to reach out to me 
          on my links at to discuss potential collaborations.
        </p>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Contact