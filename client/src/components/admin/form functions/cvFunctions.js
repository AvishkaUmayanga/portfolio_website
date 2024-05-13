export const handleCvChange = (e, setCvData) =>{
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = () =>{
      setCvData({userCv:reader.result})
    }
    
    if(file){
      reader.readAsDataURL(file)
    }
  }

export  const handleCvSubmit = async(e, addCvPdf, cvData, setResMessage) =>{
    e.preventDefault()
    try{
      const response = await addCvPdf(cvData)
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