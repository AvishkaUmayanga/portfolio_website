import React, { useState } from 'react'
import { motion} from 'framer-motion'
import emailImg from '../../assets/email.png'
import mobileImg from '../../assets/mobile.png'
import {leftToRightAnimation } from '../div animations/divAnimations'
import NotificationBox from '../notification/NotificationBox'
import { useSendEmailMutation } from '../../store/api/userApi'

function Contact() {
  const [notification, setNotification] = useState('')
  const [sendMessage] = useSendEmailMutation()
  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    const formData = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      message: e.target.userMessage.value,
    }
    
    try{
      const response = await sendMessage({name:formData.name, email:formData.email, message:formData.message})
      if(response.error){
        setNotification(response.error.data.message)
      }
      else{
        setNotification(response.data.message)
        e.target.reset()
      }
    }
    catch(error){
      setNotification(error.message)
    }
    setTimeout(()=>{
      setNotification('')
    },4000)
  }
  
  return (
    <motion.div id="contact" variants={leftToRightAnimation} initial='initial' whileInView='animate' viewport={{once:true}} 
      className="relative flex flex-col items-center gap-10 py-20 " >
      <div className="flex justify-center font-semibold text-center dark:text-slate-100">
        <h2 className="text-3xl max-md:text-2xl">Take A Coffee <span className=" text-blue-950 dark:text-pink-300">& </span>Chat With Me</h2>
      </div>
      <div className="flex flex-col items-center gap-20 ">
        <div className="flex gap-10 max-md:flex-col max-md:gap-6">
          <div className="flex items-center w-64 gap-3 p-3 duration-150 bg-pink-100 shadow-md hover:scale-110">
            <img src={emailImg} alt="email" className='w-6 ' />
            <p>avishkas97@gmail.com</p>
          </div>
          <div className="flex items-center w-64 gap-3 p-3 duration-150 bg-pink-100 shadow-md hover:scale-110">
            <img src={mobileImg} alt="mobile" className='w-6 ' />
            <p>+94 764009627</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-6">
          <input required type="text" name="userName" id="userName" placeholder="Your Name" className="w-full p-2 focus:shadow-sm dark:bg-slate-200 dark:outline-pink-300 outline-slate-200"/>
          <input required type="email" name="userEmail" id="userEmail" placeholder="Your Email" className="w-full p-2 dark:bg-slate-200 dark:outline-pink-300 outline-slate-200"/>
          <textarea name="yourMessage" id="userMessage" rows="5" placeholder="Your Message" className="w-full p-2 dark:bg-slate-200 dark:outline-pink-300 outline-slate-200"></textarea>
          <button type="submit" className="p-1 text-white duration-300 border rounded-lg bg-blue-950 hover:scale-110 hover:bg-pink-200 hover:text-black w-36 dark:bg-pink-200 dark:hover:bg-pink-400 dark:text-slate-900 dark:hover:text-slate-100">Send Message</button>
        </form>
      </div> 
      {notification !== '' && <NotificationBox notification={notification}/>}
    </motion.div> 
  )
}

export default Contact
