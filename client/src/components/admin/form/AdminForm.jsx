import React from 'react'

function AdminForm(props) {
  const inputFieldsData = props.formDetails.inputDetails
  return (
    <div className='flex flex-col gap-5'>
    <form onSubmit={props.formDetails.onSubmit} className='flex flex-col gap-4 px-5 py-10'>
      { inputFieldsData.map((inputData, index)=>(
      <div key={index} className='relative flex flex-col '>
        <label className='absolute mt-[-10px] ml-2 bg-white font-medium text-sm'>{inputData.inputText}</label>
        <input type={inputData.inputType} name={inputData.name} id="" className='py-2 border rounded-md focus:outline-none' onChange={props.formDetails.onChange} accept={props.formDetails.accept} />
      </div>
      ))}
      <div className='flex justify-center'>
        <button type='submit' className='p-1 text-white duration-300 bg-blue-800 border rounded-md hover:scale-105'>{props.formDetails.inputBtnText}</button>
      </div>
    </form>
    </div>
  )
}

export default AdminForm