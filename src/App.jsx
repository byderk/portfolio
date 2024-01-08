import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { BiSolidDownload } from "react-icons/bi";
import Home from './components/Home'
import Info from './components/Info'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from "./components/Navigation"
import SideToggle from './components/SideToggle'
import Header from './components/Header'
import DownloadResume from './components/DownloadResume'
import Carousel from './components/Carousel';

function App() {
  const getSystemTheme = () => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;
    return theme;
  }
  
  const persistDarkMode = localStorage.getItem("dark_mode");
  const persistSystemMode = localStorage.getItem("system_mode") === "true" ? true : false;
  const mode = persistSystemMode ? getSystemTheme() : persistDarkMode === "true" ? true : false;

  const [isOpen, setIsOpen] = useState(false);
  const [album, setAlbum] = useState(null);
  const [isGraphic, setIsGraphic] = useState(false);
  const [darkmode, setDarkMode] = useState(mode);
  const [byTheme, setByTheme] = useState(persistSystemMode);

  const displayCarousel = (val, bol) => {
    setAlbum(val);
    setIsGraphic(bol);
  }
  const setTheme = () => {
    const theme = getSystemTheme();
    setDarkMode(theme);
    setByTheme(true);
  }

  const setModeLight = () => {
    setDarkMode(false);
    setByTheme(false);
  }

  const setModeDark = () => {
    setDarkMode(true);
    setByTheme(false);
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    localStorage.setItem("dark_mode", darkmode);
    localStorage.setItem("system_mode", byTheme);
  }, [darkmode, byTheme])

  return (
    <div id="App" className={`w-full min-h-screen p-4 pr-8 flex flex-col overflow-hidden ${darkmode ? 'darkMode' : "lightMode"}`}>
      <Router>
        <div className="w-full max-w-7xl mx-auto relative flex-grow border border-[#979797] p-6 duration-500 transition-all">
          <h1 className='absolute left-6 bottom-3 flex flex-col items-start opacity-0 font-black uppercase text-7xl md:text-8xl lg:text-9xl md:opacity-50 md:z-40'>
            <button onClick={() => setIsOpen(true)} className='z-10 cursor-pointer flex items-center text-sm uppercase gap-2 duration-150 transition hover:scale-95 active:scale-95'>Download CV<BiSolidDownload /></button>
            <span className={`bg-clip-text text-transparent bg-gradient-to-b opacity-20 ${darkmode ? 'from-text-light to-bg-dark' : ' from-text-dark via-text-dark bg-bg-light'}`}>Volume 1</span>
          </h1>
          <DownloadResume isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
          {album && <Carousel album={album} setAlbum={displayCarousel} isGraphic={isGraphic}/>}
          <div className="absolute rotate-90 -right-[150px] top-[120px]">
            <SideToggle 
              darkmode={darkmode}
              byTheme={byTheme}
              setTheme={setTheme}
              setModeDark={setModeDark}
              setModeLight={setModeLight}
            />
          </div>
          <div className='absolute z-40'>
            <Header />
            <Navigation darkmode={darkmode} />
          </div>
          <div className="w-full sm:w-auto absolute bottom-0 right-0">
            <Routes>
              <Route exact path="/" element={ <Home />} />
              <Route exact path="/info" element={ <Info />} />
              <Route exact path="/projects" element={ <Projects setAlbum={displayCarousel} darkmode={darkmode} />} />
              <Route exact path="/contact" element={ <Contact />} />  
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
