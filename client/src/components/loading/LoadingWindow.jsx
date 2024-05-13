import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingWindow() {
  return (
    <div className='fixed top-0 z-50 flex items-center justify-center w-screen h-screen bg-white dark:bg-slate-950'>
      <div className="flex items-center gap-2 font-medium lg:text-2xl dark:text-white" >
        <AiOutlineLoading3Quarters className="animate-spin "/><span>Loading...</span>
      </div>
    </div>
  )
}

export default LoadingWindow