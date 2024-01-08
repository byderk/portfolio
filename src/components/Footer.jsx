import React from 'react'
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail} from "react-icons/bi";
import Links from './Links';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const notify = () => {
    handleCopyClick();
    toast.success("Email address copied!", {
      icon: "✅"
    }) 
};
  

  const handleCopyClick = () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'aronaleschristian@gmail.com';
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const handleGoUrl = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className='space-y-4'>
        <div className='border-b-2 border-stone-300 pb-4 flex items-center justify-start md:justify-center gap-4'>
          <div onClick={() => handleGoUrl('https://github.com/byderk')} className='active:scale-90 duration-50 transition'><Links><FaGithub /><span className='hidden lg:block'>Git</span></Links></div>
          <div onClick={() => handleGoUrl('https://web.facebook.com/christianderick.aronales/')} className='active:scale-90 duration-50 transition'><Links><FaFacebookF /><span className='hidden lg:block'>Facebook</span></Links></div>
          <div onClick={notify} className='active:scale-90 duration-50 transition'><Links><BiLogoGmail /><span className='hidden lg:block'>Gmail</span></Links></div>
          <div onClick={() => handleGoUrl('https://www.linkedin.com/in/christian-derick-aronales-60b89a191/')} className='active:scale-90 duration-50 transition'><Links><FaLinkedinIn /><span className='hidden lg:block'>LinkedIn </span></Links></div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
        />
        <div className='opacity-90 text-sm'>
            <p>&copy; 2023 Christian Derick Aronales. All rights reserved.</p>
            <p>Powered by <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a></p>
        </div>
  </div>
  )
}

export default Footer