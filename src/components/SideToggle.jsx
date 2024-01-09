import React from 'react'

const SideToggle = ({darkmode, byTheme, setTheme, setModeDark, setModeLight}) => {

  return (
    <div className="flex items-center gap-8 uppercase">
      <div className="flex items-center gap-2 group">
          <input type='button' name='light' onClick={setModeLight} className={`cursor-pointer rounded-none w-3 h-3 border focus:outline-none transition duration-150 bg-bg-dark ${byTheme ? (darkmode ? 'bg-bg-dark' : 'bg-bg-light border-bg-dark') : darkmode && 'bg-bg-dark'}`}/>Light
          <div className='absolute text-[8px] top-[17px] opacity-0 group-hover:opacity-100 transtion duration-200'>Turn light mode</div>
      </div>
      <div className="flex items-center gap-2 group">
          <input type='button' name='dark' onClick={setModeDark} className={`cursor-pointer rounded-none w-3 h-3 border focus:outline-none transition duration-150 ${byTheme ? (darkmode ? 'bg-bg-dark' : 'bg-bg-light border-bg-dark') : !darkmode && 'bg-bg-light border-bg-dark'}`}/>Dark
          <div className='absolute text-[9px] top-[17px] opacity-0 group-hover:opacity-100 transtion duration-200'>Turn dark mode</div>
      </div>
      <div className="flex items-center gap-2 group">
          <input type='button' name='system' onClick={setTheme} className={`cursor-pointer rounded-none w-3 h-3 border focus:outline-none transition duration-150 ${byTheme ? (darkmode ? 'bg-bg-light' : 'bg-bg-dark') : (darkmode ? 'bg-bg-dark' : 'bg-bg-light border-bg-dark')}`}/>
          <span className={`opacity-90 ${byTheme && 'opacity-100'} transition-opacity duration-300`}>System</span>
          <div className='absolute w-max text-[9px] top-[17px] opacity-0 group-hover:opacity-100 transtion duration-200'>Theme preference</div>
      </div>
    </div>
  )
}

export default SideToggle