import React from 'react'
import { IoMdClose } from "react-icons/io";

function ResponseMessage(props) {
  return (
    <div className='fixed top-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-60' onClick={props.onClick}>
      <div className='relative flex items-center justify-center h-40 bg-white border rounded w-96' onClick={(e)=> e.stopPropagation()}>
        <IoMdClose className='absolute right-2 top-1 ' onClick={props.onClick}/>
        <p>{props.resText}</p>
      </div>
    </div>
  )
}

export default ResponseMessage