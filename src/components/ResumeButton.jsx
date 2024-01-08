import React from 'react'
import { BiSolidDownload } from "react-icons/bi";

const ResumeButton = () => {

  return (
    <div>
      <button className='uppercase text-sm absolute top-6 right-6'>
        <a className='flex items-center gap-2'><span className='hidden md:block'>Resume</span> <BiSolidDownload className='transition duration-150 hover:scale-110' size={14} /></a>
      </button>
    </div>
  )
}

export default ResumeButton