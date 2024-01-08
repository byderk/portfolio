import React from 'react'

const InfoCard = () => {
  return (
    <div className="w-full flex flex-col leading-tight gap-1 text-justify text-[10px] uppercase md:text-sm">
      <div>
        <h1 className='font-bold'>Purpose</h1>
        <p>This project showcases my abilities, growth, and accomplishments. 
        It reflects my dedication to continuous learning, adaptability, and passion.</p>
      </div>
      <div>
        <h1 className='font-bold'>Note</h1>
        <p>For professional development only, not for commercial or promotional purposes. </p>
      </div>
    </div>
  )
}

export default InfoCard