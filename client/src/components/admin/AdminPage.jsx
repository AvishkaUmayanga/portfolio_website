import React, { useState } from 'react'
import Accordion from './accordion/Accordion';
import { useAddCvMutation, useAddExperienceMutation, useAddProfileImageMutation, useAddSkillImagesMutation } from '../../store/api/userApi';
import { handleProfileImgChange, handleProfileSubmit } from './form functions/profileFunctions';
import { handleSkillImgChange, handleSkillSubmit } from './form functions/skillsFunctions';
import { handleCvChange, handleCvSubmit } from './form functions/cvFunctions';
import { handleExperienceChange, handleExperienceSubmit } from './form functions/experienceFunctions';
import ResponseMessage from './response message/ResponseMessage';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const profileInputDetails = [{inputText:'Profile Image',  inputType:'file'}]
  const cvInputDetails = [{inputText:'CV',  inputType:'file'}]
  const skillsInputDetails = [{inputText:'Skill',  inputType:'file'}]
  const experienceInputDetails= [{inputText:'Position', inputType:'text', name:'position'},{inputText:'Company', inputType:'text',name:'company'},{inputText:'Year', inputType:'text', name:'year'}]
  
  const [addProfile] = useAddProfileImageMutation()
  const [addSkill] = useAddSkillImagesMutation()
  const [addCvPdf] = useAddCvMutation()
  const [addExperience] = useAddExperienceMutation()
  
  const [profileData, setProfileData] = useState({})
  const [skillData, setSkillData] = useState({})
  const [cvData, setCvData] = useState({})
  const [experienceData, setExperienceData] = useState({})
  const [resMessage, setResMessage] = useState('')
  const navigate = useNavigate()

  const setEmpltyMessage = () =>{
    setResMessage('')
  }
  
  const logOut = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
    <div className='flex justify-end px-10 py-5 border'>
      <button onClick={logOut} className='px-2 py-1 text-white bg-red-500 rounded-md'>Logout</button>
    </div>
    <div className='flex flex-col items-center gap-5 py-10'>
     <Accordion buttonText='Add Or Update Profile Image' inputDetails={profileInputDetails} inputBtnText='Upload Profile Image' onChange={(e)=>{handleProfileImgChange(e, setProfileData)}} onSubmit={(e)=>{handleProfileSubmit(e, addProfile, profileData, setResMessage)}} accept='image/*'/>
     <Accordion buttonText='Add Or Update CV' inputDetails={cvInputDetails} inputBtnText='Upload CV' onChange={(e)=>{handleCvChange(e, setCvData)}} onSubmit={(e)=>{handleCvSubmit(e, addCvPdf, cvData, setResMessage)}} />
     <Accordion buttonText='Add Skills' inputDetails={skillsInputDetails} inputBtnText='Add Skill' onChange={(e)=>{handleSkillImgChange(e, setSkillData)}} onSubmit={(e)=>handleSkillSubmit(e, addSkill, skillData, setResMessage)} accept='image/*'/>
     <Accordion buttonText='Add Experience' inputDetails={experienceInputDetails} inputText='Experience' inputBtnText='Add Experience' onChange={(e)=>{handleExperienceChange(e, setExperienceData, experienceData)}} onSubmit={(e)=>{handleExperienceSubmit(e, addExperience, experienceData, setResMessage)}} />
    </div>
    {resMessage !== '' && <ResponseMessage resText={resMessage} onClick={setEmpltyMessage}/> }
    </>
  )
}

export default AdminPage