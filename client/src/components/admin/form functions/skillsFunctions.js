export const handleSkillImgChange = (e, setSkillData) =>{
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = () =>{
      setSkillData({skillImg:reader.result})
    }
    
    if(file){
      reader.readAsDataURL(file)
    }
  }

export  const handleSkillSubmit = async(e, addSkill, skillData, setResMessage) =>{
    e.preventDefault()
    try{
      const response = await addSkill(skillData)
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