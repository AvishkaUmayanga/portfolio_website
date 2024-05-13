export const handleExperienceChange = (e, setExperienceData, experienceData) =>{
    const {name, value} = e.target
    setExperienceData({...experienceData, [name]:value})
  }

export  const handleExperienceSubmit = async(e, addExperience, experienceData, setResMessage) =>{
    e.preventDefault()
    try{
      const response = await addExperience(experienceData)
      if(response.error){
        setResMessage(response.error.data.message)
      }
      else{
        setResMessage(response.data.message)
        e.target.reset()
      }
    }
    catch(error){
      setResMessage(error.message)
    }
  }