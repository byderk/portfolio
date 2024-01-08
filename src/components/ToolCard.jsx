import React from 'react';

const ToolCard = ({ children, darkmode }) => {
  return (
    <div className={`px-2 py-1 rounded-sm font-medium tracking-wide shadow-lg transition duration-150 font-sans
    ${darkmode ? 'border border-stone-400 text-stone-300 bg-inherit' 
    :'bg-text-dark text-bg-light border hover:border-bg-dark hover:text-bg-dark hover:bg-inherit'}`}>
        {children}
    </div>
  );
}

export default ToolCard;
