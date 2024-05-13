import React from 'react'
import { motion } from 'framer-motion'
import TextTypeAnimation from '../type animation/TextTypeAnimation'
import ToolsSlider from '../slider/ToolsSlider'
import AnimateButton from '../button/AnimateButton'
import { useGetCvQuery, useGetProfileImageQuery } from '../../store/api/userApi'
import LoadingWindow from '../loading/LoadingWindow'
import { bottomToTopAnimation, fadeInAnimation, leftToRightAnimation } from '../div animations/divAnimations'

function Home() {
  const { data:profileData, isLoading, isSuccess } = useGetProfileImageQuery()
  const { data:cvData} = useGetCvQuery()
  const profileImg = profileData?.profileImg
  if(isLoading){
    return<LoadingWindow />
  }
  
  const downloadCv = () => {
    const base64String = cvData?.myCv;
    const byteCharacters = atob(base64String.slice("data:application/pdf;base64,".length))
    const byteArray = new Uint8Array(byteCharacters.length)
  
    for(let i = 0; i < byteCharacters.length; i++){
      byteArray[i] = byteCharacters.charCodeAt(i);
    }
  
    const blob = new Blob([byteArray.buffer], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Avishka_cv.pdf"
    a.click()
  }
  
  return (
    <div id='home' className=' xl:h-[92vh] max-md:h-[95vh] bg-mainBg bg-cover pt-5 dark:bg-mainBg2 flex flex-col justify-between overflow-hidden'>
      <div className='flex flex-col h-full xl:mx-40 xl:gap-4 lg:px-10 max-xl:gap-14 max-md:mx-5 md:mx-16 max-xsm:gap-8 max-md:gap-20'>
        <div className='flex justify-end w-full'>
          <TextTypeAnimation />
        </div>
        <motion.div variants={leftToRightAnimation} initial='initial' whileInView='animate' viewport={{once:true}} className='flex justify-start dark:text-slate-100'>
          <h1 className='text-4xl max-md:text-3xl font-dancingScript'>Hey There<br/> I am Avishka</h1>
        </motion.div>
        {isSuccess && (
        <motion.div variants={fadeInAnimation} initial='initial' whileInView='animate' viewport={{once:true}} className='flex justify-center '>
          <div className='flex items-center overflow-hidden bg-white bg-cover rounded-full w-80 h-80'>
            <img src={profileImg} alt="profile bg" className='object-cover w-80 h-96 ' /> 
          </div>
        </motion.div>
        )}
        <motion.div variants={bottomToTopAnimation} initial='initial' whileInView='animate' viewport={{once:true}} className='flex justify-center sm:mt-3 md:my-8 xl:my-0'>
          <AnimateButton onClick={downloadCv} btnText='Download CV'/>
        </motion.div> 
      </div>
      <motion.div variants={bottomToTopAnimation} initial='initial' animate='animate' viewport={{once:true}}>
        <ToolsSlider />
      </motion.div>
    </div>
  )
}

export default Home