import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TextTypeAnimation() {
  return (
    <>
    <TypeAnimation
        sequence={[
        'I am Frontend Developer',
        1000, 
        'I am Backend Developer',
        1000,
        'I am Web Developer',
        1000,
        'I am MERN Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      style={{ 
        fontSize: '1.5em', 
        display: 'inline-block', 
        color: 'blue',
      }}
    />
    </>
  )
}

export default TextTypeAnimation