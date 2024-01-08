import React from 'react'
import { Link } from 'react-router-dom';
import { BiChevronDownSquare } from "react-icons/bi";

const Home = () => {
  return (
    <div className='h-full p-6 flex-flex-col justify-end'>
      <h1 className='text-base text-justify uppercase ml-auto w-full sm:w-3/4 md:w-48 md:text-lg'>
        Born on 1997, Philippines. A graduate of Computer Engineering with 4 years of working experience on tech maintenance, graphic arts and web development.
        <Link to='/info' className='flex items-center gap-1 group text-xs whitespace-nowrap transition duration-150 uppercase opacity-80 hover:opacity-100'>
          show more <BiChevronDownSquare size={13} className='opacity-0 transition-opacity duration-150 group-hover:opacity-100'/>
        </Link>
      </h1>
    </div>
  )
}

export default Home