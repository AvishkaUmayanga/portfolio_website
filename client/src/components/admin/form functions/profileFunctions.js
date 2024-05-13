export const handleProfileImgChange = (e, setProfileData) =>{
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = () =>{
      setProfileData({profileImg:reader.result})
    }
    
    if(file){
      reader.readAsDataURL(file)
    }
  }

export  const handleProfileSubmit = async(e, addProfile, profileData, setResMessage) =>{
    e.preventDefault()
    try{
      const response = await addProfile(profileData)
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