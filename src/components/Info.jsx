import React, {useState} from 'react'
import { BiInfoSquare, BiX, BiSolidFilePdf } from "react-icons/bi";
import InfoCard from './InfoCard';
import DownloadResume from './DownloadResume'

const Info = () => {
  const [ showDisclaimer, setShowDisclaimer ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }
  
  return (
    <div className='w-full ml-auto p-6 sm:w-3/4 md:w-1/2 text-sm md:text-base'>
      <DownloadResume isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-medium'>About me</h1>
        <p>
          Hey there, thanks first of all thank you for visiting my portfolio. I'm a web developer with a 
          background in computer engineering. 
        </p>
        <p>
          Outside of coding and work, I have a passion for music and enjoy playing basketball. 
          Recently, I've begun a fitness journey to maintain a healthier lifestyle.
        </p>

        <div className='my-2'>
          <p>For additional details about myself, feel free to download my CV</p><div className='inline-block md:hidden'><span className='flex gap-1 cursor-pointer'><BiSolidFilePdf onClick={() => setIsOpen(true)} size={16} /> here.</span></div>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <button onClick={() => setShowDisclaimer(!showDisclaimer)} className='flex items-center transition duration-300'>
          { showDisclaimer ? (<div className='group flex items-center'><BiX className='transition duration-300 group-hover:scale-125' size={16}/><span className='uppercase text-xs font-medium'>Close</span></div>) : (<><BiInfoSquare size={14} /><span className='uppercase text-xs font-medium pl-[2px]'>Disclaimer</span></>)}
        </button>
        {
          showDisclaimer && <InfoCard />
        }
      </div>
    </div>
  )
}

export default Info