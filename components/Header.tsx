import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { View } from '../App';

// Icons
const SearchIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const MenuIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const CloseIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const PlayIcon = () => (<svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>);
const PauseIcon = () => (<svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>);


const navLinks = [
    { label: 'HOME', category: 'HOME', view: 'HOME' as View },
    { label: 'FUTEBOL', category: 'FUTEBOL SHOW 520', view: 'CATEGORY' as View },
    { label: 'AUTOMOBILISMO', category: 'VOLTA RÁPIDA', view: 'CATEGORY' as View },
    { label: 'ESPECIAIS', category: 'ESPECIAIS', view: 'CATEGORY' as View },
    { label: 'SOBRE NÓS', category: 'SOBRE NÓS', view: 'ABOUT' as View },
];

interface HeaderProps {
  currentView: View;
  activeCategory: string | null;
}

const Header: React.FC<HeaderProps> = ({ currentView, activeCategory }) => {
  const { isRadioPlaying, toggleRadio } = useAppContext();
  const { handleNavigate, handleSelectCategory } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const weekdayRaw = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(now);
      const timeRaw = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(now);
      const weekdayFormatted = weekdayRaw.replace(/[.,]/g, '').toUpperCase();
      setCurrentTime(`${weekdayFormatted} ${timeRaw}`);
    };
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.view === 'CATEGORY') {
      handleSelectCategory(link.category);
    } else {
      handleNavigate(link.view);
    }
    setIsMenuOpen(false);
  };
  
  const getActiveNavItem = () => {
    if (currentView === 'HOME') return 'HOME';
    if (currentView === 'CATEGORY') return activeCategory;
    if (currentView === 'ABOUT') return 'SOBRE NÓS';
    return null;
  }
  const activeNavItem = getActiveNavItem();

  return (
    <>
      <header className="bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 text-white border-b border-gray-200/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
                <div onClick={() => handleNavigate('HOME')} className="flex items-center cursor-pointer">
                    <img src="https://public-rf-upload.minhawebradio.net/249695/ad/1ccbd4ef8fcc652a7e0c5c0e6215d5ae.jpeg" alt="RADIO520 Logo" className="h-14 w-auto rounded-md" />
                    <div className="ml-3">
                        <h1 className="text-3xl font-heading font-black tracking-tighter text-white leading-none">RADIO520</h1>
                        <span className="block text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight font-heading -mt-1">.COM.BR</span>
                    </div>
                </div>
                 <div className="ml-10 pl-4 sm:ml-12 sm:pl-4 border-l border-gray-700 hidden sm:block">
                    <p className="text-xs font-bold tracking-wider text-gray-300">{currentTime}</p>
                    <p className="text-xs text-gray-500">HORA LOCAL</p>
                </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 transition-colors duration-300 text-sm font-bold tracking-wider focus:outline-none font-heading ${
                    activeNavItem === link.category ? 'text-teal-300' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  { activeNavItem === link.category &&
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></span>
                  }
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                    onClick={toggleRadio}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 group ${
                        isRadioPlaying
                        ? 'border border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/20'
                        : 'border border-gray-700 hover:border-teal-500 hover:bg-gray-800'
                    }`}
                    aria-label={isRadioPlaying ? 'Pausar rádio' : 'Ouvir rádio ao vivo'}
                >
                    <div className={`relative flex items-center justify-center w-5 h-5 transition-colors ${isRadioPlaying ? 'text-teal-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {isRadioPlaying ? <PauseIcon /> : <PlayIcon />}
                    </div>
                    <span className={`text-xs font-bold tracking-wider uppercase transition-colors font-heading ${isRadioPlaying ? 'text-teal-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {isRadioPlaying ? 'AO VIVO' : 'RÁDIO'}
                    </span>
                    {isRadioPlaying && (
                        <div className="relative flex items-center justify-center w-2 h-2 ml-1">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                        </div>
                    )}
                </button>
              
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white transition-colors duration-200 z-50">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="flex flex-col items-center justify-center h-full pt-20">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`w-full py-4 text-3xl font-heading font-bold transition-colors duration-200 ${
                activeNavItem === link.category ? 'text-teal-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;