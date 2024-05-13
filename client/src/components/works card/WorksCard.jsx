import React from 'react'
import { motion } from 'framer-motion';
import { projectData } from '../../data/projectData'
import { FaGithub } from "react-icons/fa";
import { oddEvenBasedAnim } from '../div animations/divAnimations';

function WorksCard() {
  return (
    <>
    {projectData.map((data, index)=>(
    <motion.div key={index} variants={oddEvenBasedAnim} initial='initial' whileInView='animate' custom={index} viewport={{once:true}}  className="relative flex items-center justify-center p-1 overflow-hidden text-white rounded-md box xl:w-72 max-xl:w-60">
      <div className="absolute w-1/3 h-[200%]  from-[#00ccff] to-[#d599f9]  animate-spin-slow  rounded-md bg-gradient-to-t"></div>
      <div className="absolute bg-[#edf2f8] inset-1 rounded-md "></div>
      <div className="relative z-10 w-full h-full rounded-md group">
        <div className='absolute w-full h-full translate-y-[105%] bg-black rounded-md  bg-opacity-90  group-hover:translate-y-0 duration-300 flex flex-col gap-5 justify-center items-center p-5'>
          <p className='text-sm max-lg:text-xs'>{data.projectDetails}</p>
          <a href={data.link} target='blank' rel='nonreferrer' >
            <button className='flex items-center gap-1 px-3 py-1 duration-500 border max-md:text-sm hover:bg-gradient-to-tr from-pink-800 via-slate-600 to-purple-800 hover:-skew-x-12 bg-slate-900'>
              <FaGithub />
              <span>Click Here</span>
            </button>
          </a>
        </div>
        <img key={data._id} src={data.imgUrl} alt="projects" className='rounded-md'  />
      </div>
    </motion.div>
    ))}
    </>
  )
}

export default WorksCard