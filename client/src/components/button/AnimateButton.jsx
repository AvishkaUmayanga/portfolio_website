import React from 'react'
import { FaGithub } from "react-icons/fa";

function AnimateButton(props) {
  return (
    <>
    <a href={props.link} target='blank' rel='noreferrer'>
    <button onClick={props.onClick} className=' font-medium text-white -skew-x-[15deg] hover:skew-x-0 duration-500 px-4 py-2 bg-gradient-to-br from-pink-800 via-slate-600 to-purple-800 shadow-md dark:shadow-slate-500 hover:shadow-none rounded'>
      {props.btnText}
    </button>
    </a>
    </>
  )
}

export default AnimateButton