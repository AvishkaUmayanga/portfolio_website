import React from 'react'
import { motion} from 'framer-motion'
import { bottomToTopAnimation, fadeInAll } from '../div animations/divAnimations'
import { useGetExperienceQuery, useGetSkillImagesQuery } from '../../store/api/userApi'
import LoadingWindow from '../loading/LoadingWindow'

function Skills() {
  const { data:skillData, isLoading} = useGetSkillImagesQuery()
  const { data:experienceData, isLoading:experienceLoading } = useGetExperienceQuery()
  const skillImages = skillData?.allSkills
  if(isLoading || experienceLoading){
    return<LoadingWindow />
  }
  const allExperience = experienceData?.allExperience
  return (
    <div id="skills" className="flex flex-col justify-center py-32 mt-10 dark:text-slate-100">
      <div className="flex justify-center font-semibold text-center">
        <h2 className="text-3xl max-md:text-2xl ">Skills <span className=" text-blue-950 dark:text-gray-400">& </span>Experience</h2>
      </div>
      <div className="flex justify-center gap-40 px-20 mt-16 max-md:flex-col max-md:gap-10 max-lg:px-5 max-lg:gap-6">
        <div className="flex flex-wrap justify-center gap-10 ">
          {skillImages?.map((skill, index)=>(
            <motion.div key={skill._id}
              variants={fadeInAll} initial= 'initial' whileInView= 'animate' custom={index} viewport={{once:true}} className='w-20 h-20 p-3 bg-white rounded-full dark:bg-slate-100'
            >
              <img  src={skill.skillImg} alt={skill.skillImg}  className="object-contain w-full h-full duration-300 hover:grayscale hover:scale-110" /> 
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col w-[250px] max-lg:items-center  self-center">
          {allExperience.map((experience)=>(
          <motion.div key={experience._id} variants={bottomToTopAnimation} initial='initial' whileInView='animate' viewport={{once:true}}>
            <h3 className="text-xl font-semibold text-blue-950 dark:text-gray-50">{experience.position}</h3>
            <p className="text-lg ">{experience.company}</p>
            <p>{experience.year}</p>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills