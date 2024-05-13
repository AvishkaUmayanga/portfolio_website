import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(()=>{
    const toggleScrolled = () =>{
      if(window.scrollY > 80){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', toggleScrolled)
  })
  const scrollUp = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  
  return (
    <>
    { isScrolled && (
      <div onClick={scrollUp} className='fixed flex items-center justify-center w-10 h-10 text-xl duration-300 rounded-md cursor-pointer right-4 bottom-24 group dark:hover:bg-slate-200 bg-slate-900 dark:bg-white hover:bg-slate-700'>
        <FaArrowUp className='text-white duration-300 group-hover:scale-110 dark:text-slate-950' />
      </div>
    )}
  </>
  )
}

export default ScrollToTop