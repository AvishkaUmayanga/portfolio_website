import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsappSquare, FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex flex-col gap-2 py-5 text-white bg-slate-900'>
      <div className='flex items-center justify-center gap-2 '>
        <FaRegCopyright/>
        <p>2024 Avishka Umayanga</p>
      </div>
      <div className='flex justify-center gap-6 '>
        <div className='flex gap-5 '>
          <a href='https://bit.ly/avishkaLinkedIN' target='blank' rel='noreferrer'><FaLinkedin/></a>
          <a href='https://bit.ly/avishkaGitHub' target='blank' rel='noreferrer'><FaGithub /></a>
          <MdOutlineEmail/>
          <a href='https://bit.ly/avishkaFbAcc' target='blank' rel='noreferrer'><FaFacebook /></a>
          <a href='https://bit.ly/3tHxriH' target='blank' rel='noreferrer'><FaXTwitter /></a>
          <a href='https://bit.ly/avishkaInsta' target='blank' rel='noreferrer'><FaInstagram /></a>
          <a href='https://bit.ly/AvishkaWhatsApp' target='blank' rel='noreferrer'><FaWhatsappSquare /></a>
          <FaViber />
        </div>
      </div>
    </div>
  )
}

export default  Footer
