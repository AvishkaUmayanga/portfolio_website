import React, { useEffect, useState } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <>
      <div className='sticky top-0 shadow-sm flex items-center justify-between w-full dark:bg-slate-950   bg-[#edf2f8] z-50 h-[5vh]  px-5 lg:h-[8vh] lg:px-10'>
        <div className="font-bold text-blue-900 dark:text-slate-100">
          <h1 className="text-xl xl:text-2xl">AVISHKA </h1>
        </div>
        <ul className='flex gap-10 '>
          {['home', 'work', 'skills', 'contact'].map((item) => (
            <li key={item} className='flex flex-col items-center justify-center max-lg:hidden'>
              <Link smooth to={`#${item}`} className={`  uppercase duration-300  hover:text-gray-950 dark:hover:text-slate-400 ${location.hash===`#${item}`? 'text-purple-400':'text-blue-900 dark:text-slate-100'}`}>{item}</Link>
            </li>
          ))}
          <li className={`lg:hidden rounded-full ${isMenuOpen ? 'hidden' : 'flex flex-col items-end '}`} onClick={toggleMenu}><FaBars className='dark:text-slate-100' /></li>
          <li className={`lg:hidden rounded-full ${isMenuOpen ? 'flex flex-col items-end' : ' hidden'}`} onClick={toggleMenu} ><GrClose className='dark:text-slate-100'/></li>
        </ul>
      </div>
      <div className={`${isMenuOpen ? 'flex translate-y-0' : '-translate-y-full'} right-0 top-[5vh] h-[95vh] w-full dark:bg-slate-950  fixed  z-40 duration-500 bg-[#edf2f8] `}>
        <div className='flex justify-center w-full h-full'>
          <ul className="flex flex-col items-center justify-center gap-10">
            {['home', 'work', 'skills', 'contact'].map((item) => (
              <li key={item} className='flex flex-col items-start ' onClick={toggleMenu}>
                <Link smooth to={`#${item}`} className={`${location.hash===`#${item}`? 'text-purple-400':'text-blue-900 dark:text-slate-100'} uppercase`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavigationBar