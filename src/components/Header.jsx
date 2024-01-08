import React from 'react'
import { PiFinnTheHumanFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className='space-y-2'>   
        <h1 className="text-4xl md:text-5xl break-normal">Christian Derick Aronales</h1>
        <div className='flex items-center gap-3'><PiFinnTheHumanFill /><p className="text-xs sm:text-sm md:text-base space-x-2"><span>BSCpE</span><span>|</span><span>Web Developer</span></p></div>
    </div>
  )
}

export default Header