import React from 'react'

const Links = (props) => {
const { rest, children, className } = props;
  return (
    <div className='flex flex-grow gap-2'>
        <button
        {...rest}
        type="button"
        className={`flex items-center gap-2 text-md py-2 pr-3 pl-2 rounded-md shadow-md transition duration-150 hover:shadow-md' ${className}`}
        >
            {children}
        </button>
    </div>
  )
}

export default Links