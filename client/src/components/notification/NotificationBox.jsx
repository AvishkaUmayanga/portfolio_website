import React from 'react'
import { motion } from 'framer-motion'
import { fadeAnimation } from '../div animations/divAnimations'

function NotificationBox(props) {
  return (
    <motion.div variants={fadeAnimation}  initial='initial' animate='animate' className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full '>
      <div className='flex items-center justify-center px-20 py-8 text-lg font-semibold text-white bg-green-400 rounded-md max-md:px-10'>
        <p>{props.notification}</p>
      </div>
    </motion.div>
  )
}

export default NotificationBox