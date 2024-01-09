import React, { useState } from 'react'
import ToolCard from './ToolCard'
import graphicProj from '../images/graphicProj'
import webProj from '../images/webProj'

const Projects = ({ darkmode, setAlbum }) => {
const [ showGraph, setShowGraph ] = useState(true);
const [ tool, setTool ] = useState(1);
const [ graphTool, setGraphTool ] = useState(1);
const [ webTool, setWebTool ] = useState(1);

const renderTools = (tools) => {
  return (
    <div className='flex flex-wrap items-center text-xs gap-1 z-40'>
      <h2 className='mr-1'>Tools</h2> 
      {
        tools && tools.map((tool) => (
          <ToolCard key={tool.id} darkmode={darkmode}>{tool.name}</ToolCard>
        ))
      }
    </div>
  )
}

const renderProjects = (projects, isGraphic) => (
  <div className='flex flex-col gap-2'>
    <div className='image-container flex gap-2 overflow-x-scroll z-40'> {
      projects.map((proj) => (
        <div onClick={() => setTool(proj.id)} style={{ backgroundImage:`url(${proj.images[0]?.src})` }} key={proj.id} className={`relative cursor-pointer w-32 h-32 shrink-0 flex items-center justify-center bg-cover bg-center transition-all duration-150 rounded-t-sm shadow-sm group md:h-28 lg:h-32 ${tool == proj.id ? 'w-52' : 'hover:w-36'}`}>
          <div className={`absolute top-0 left-0 bg-black w-full h-full rounded-t-sm transition duration-500 ${tool == proj.id ? 'opacity-20' : 'opacity-50 group-hover:opacity-'}`}/>
          <div className='flex flex-col items-center gap-1 z-10 text-text-light pt-7 uppercase'>
            <h1 className={`font-semibold stroke-2 stroke-black ${tool == proj.id ? 'opacity-100' : 'group-hover:opacity-100'}`}>{proj.name}</h1>
            <button onClick={() => setAlbum(proj, isGraphic)} className='opacity-0 rounded-sm text-xs transition duration-200 uppercase group-hover:opacity-100 hover:scale-95'>See content</button>
          </div>
        </div>
        ))
      }
    </div>
    {renderTools(projects[tool - 1]?.tools)}
  </div>
);

const renderByProject = (project, graph) => (
  <div className='flex flex-col gap-2'>
    <div className='image-container flex gap-2 overflow-x-scroll'> {
      project.map((proj) => (
        <div onClick={() => { graph ? setGraphTool(proj.id) : setWebTool(proj.id)} } style={{ backgroundImage:`url(${proj.images[0]?.src})` }} key={proj.id} 
        className={`relative cursor-pointer w-32 h-32 shrink-0 flex items-center justify-center bg-cover bg-center transition-all duration-150 rounded-t-sm shadow-sm group md:h-28 lg:h-32 ${graph ? (graphTool == proj.id ? 'w-52' : 'hover:w-36') : (webTool == proj.id ? 'w-52' : 'hover:w-36')}`}>
          <div className={`absolute top-0 left-0 bg-black w-full h-full rounded-t-sm transition duration-500 ${graph ? (graphTool == proj.id ? 'opacity-20' : 'opacity-50 group-hover:opacity-30') : (webTool == proj.id ? 'opacity-10' : 'opacity-50 group-hover:opacity-10')}`}/>
          <div className='flex flex-col items-center gap-1 text-white pt-7 uppercase z-40'>
            <h1 className='font-semibold'>{proj.name}</h1>
            <button onClick={() => setAlbum(proj, graph)} className='opacity-0 rounded-sm text-xs transition duration-200 uppercase group-hover:opacity-100'>See content</button>
          </div>
        </div>
        ))
      }
    </div>
    {renderTools(project[graph ? (graphTool - 1) : (webTool - 1 )]?.tools)}
  </div>
);

  return (
    <div className='w-full p-6 ml-auto sm:w-[450px] lg:w-[520px]'>
      <div className='hidden flex-col gap-2 sm:flex'>
        <div className='flex flex-col gap-2'>
          <h1>Graphics Design</h1>
          {graphicProj && renderByProject(graphicProj, true)}
        </div>
        <div className='flex flex-col gap-2'>
          <h1>Web Development</h1>
          {webProj && renderByProject(webProj, false)}
        </div>
      </div>
      <div className='flex flex-col gap-2 sm:hidden'>
      <div className='flex items-center gap-2'>
        <button className={`opacity-100 hover:opacity-80 transition duration-150 ${!showGraph && 'opacity-50'}`} 
        onClick={() => (setShowGraph(true), setTool(1))}>Graphics Design</button>
        <span>|</span>
        <button className={`opacity-100 hover:opacity-80 transition duration-150 ${showGraph && 'opacity-50'}`} 
        onClick={() => (setShowGraph(false), setTool(1))}>Web Dev</button>
      </div>
      { showGraph ? renderProjects(graphicProj, true) : renderProjects(webProj, false) }
      </div>
    </div>
  )
}

export default Projects