import React from 'react'
import { motion } from 'framer-motion'
import WorksCard from '../works card/WorksCard'
import AnimateButton from '../button/AnimateButton'
import { bottomToTopAnimation, leftToRightAnimation } from '../div animations/divAnimations'

function Work() {
  return (
    <div id='work' className="flex flex-col gap-8 py-20 overflow-hidden">
      <div  className="flex justify-center font-semibold text-center">
        <motion.h2 variants={leftToRightAnimation} initial='initial' whileInView='animate' viewport={{once:true}} className="text-3xl max-md:text-2xl dark:text-slate-100">My <span className=" text-blue-950 dark:text-gray-300">Works </span>Section</motion.h2>
      </div>
      <div className='grid justify-between gap-10 px-20 py-10 max-lg:px-5 xlg:grid-cols-cols4 max-xlg:grid-cols-cols2 max-xlg:justify-center max-sm:grid-cols-1 max-sm:self-center'>
        <WorksCard />
      </div>
      <div className='flex justify-center'>
        <motion.div variants={bottomToTopAnimation} initial='initial' whileInView='animate' viewport={{once:true}}>
          <AnimateButton btnText='See All Works' link='https://github.com/AvishkaUmayanga?tab=repositories'/>
        </motion.div>
      </div>
    </div>
  )
}

export default Work