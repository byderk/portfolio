import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Navigation = (darkmode) => {
  const location = useLocation();
    
  return (
    <div className='z-50'>
        <ul className="mt-12 space-y-2 font-medium lg:mt-11">
            <li>
                <Link to='/'>
                    {location.pathname === '/' ? <div className={`h-4 w-4 animate-bounce rounded-r-sm hover:animate-none ${darkmode.darkmode ? "bg-bg-light" : "bg-bg-dark"}`}/> : 
                    <span className='active:scale-95 hover:opacity-80 transition duration-300'>Home</span>}
                </Link>
            </li>
            <li>
                <Link to='/info'>
                    {location.pathname == '/info' ? <div className={`h-4 w-4 animate-bounce rounded-r-sm hover:animate-none ${darkmode.darkmode ? "bg-bg-light" : "bg-bg-dark"}`}/>: 
                    <span className='active:scale-95 hover:opacity-80 transition duration-300'>Info</span>}
                </Link>
            </li>
            <li>
                <Link to='/projects'>
                    {location.pathname == '/projects' ? <div className={`h-4 w-4 animate-bounce rounded-r-sm hover:animate-none ${darkmode.darkmode ? "bg-bg-light" : "bg-bg-dark"}`}/> :
                    <span className='active:scale-95 hover:opacity-80 transition duration-300'>Projects</span>}
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    {location.pathname == '/contact' ? <div className={`h-4 w-4 animate-bounce rounded-r-sm hover:animate-none ${darkmode.darkmode ? "bg-bg-light" : "bg-bg-dark"}`}/> :
                    <span className='active:scale-95 hover:opacity-80 transition duration-300'>Contact</span>}
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navigation