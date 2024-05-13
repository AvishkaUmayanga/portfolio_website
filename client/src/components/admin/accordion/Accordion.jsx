import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import AdminForm from '../form/AdminForm';


function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButton = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className='border border-blue-800 w-96 ' >
      <div className='flex items-center justify-between px-4 py-2 text-white cursor-pointer bg-slate-900' onClick={toggleButton}>
        <h2>{props.buttonText}</h2>  
        <FaPlus className={ isOpen ? ' rotate-45 duration-300' : ' rotate-0 duration-300' } /> 
      </div>
      <div className={`grid ${isOpen ? 'grid-rows-1fr' : 'grid-rows-0fr'} duration-300 `}>
        <div className='overflow-hidden '>
          <AdminForm formDetails={props}/>
        </div>
      </div> 
  </div>
  )
}

export default Accordion