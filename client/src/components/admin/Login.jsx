import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useLoginMutation } from '../../store/api/userApi'
import ResponseMessage from './response message/ResponseMessage'

function Login() {
  const [loginUser] = useLoginMutation()
  const navigate = useNavigate()
  const [resMessage, setResMessage] = useState('')
  
  const handleLogin = async(e) =>{
    e.preventDefault()
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    try{
      const response = await loginUser(loginData)
      if(response.error){
        setResMessage(response.error.data.message)
        e.target.reset()
      }
      else{
        const token = response.data.token
        localStorage.setItem('token', token)
        navigate('/admin')
      }
    }
    catch(error){
      console.log(error)
    }
  }
  
  const setEmpltyMessage = () =>{
    setResMessage('')
  }
  
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-4 bg-slate-100 '>
        <div className='flex flex-col items-center w-1/2 gap-5 p-5 px-8 bg-white border rounded-md shadow-lg lg:w-1/3 max-md:w-80'>
          <h3 className='text-2xl font-semibold'>Login</h3>
          <form onSubmit={handleLogin} className='flex flex-col w-full gap-6'>
            <div className='flex justify-between w-full '>
              <label htmlFor="emailId">Email</label>
              <input type="email" name="email" id="emailId" className='w-1/2 border focus:outline-gray-400'/>
            </div>
            <div className='flex justify-between w-full '>
              <label htmlFor="passwordId">Passaword</label>
              <input type="password" name="password" id="passwordId" className='w-1/2 border focus:outline-gray-400'/>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='self-center px-5 py-2 text-white duration-300 bg-black border rounded-lg hover:scale-95'>Login</button>
            </div>
          </form>
        </div>
        {resMessage !== '' && <ResponseMessage resText={resMessage} onClick={setEmpltyMessage} /> }
      </div>
  )
}

export default Login