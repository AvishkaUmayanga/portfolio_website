import React, { useEffect, useState } from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";

function ModeButton() {
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }
    else{
        document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handleTheme = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <div onClick={handleTheme} className='fixed flex items-center justify-center w-10 h-10 text-xl duration-300 rounded-md cursor-pointer right-4 top-24 group dark:hover:bg-slate-200 bg-slate-900 dark:bg-white hover:bg-slate-700'>
      <HiOutlineLightBulb className='hidden dark:flex'/>
      <IoMoonSharp className=' dark:hidden fill-white'/>
    </div>
  )
}

export default ModeButton