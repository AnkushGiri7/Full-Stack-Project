import React, { useState } from 'react'

const Input = ({}) => {
    const[inputValue,setInputValue] = useState("")
  return (
    <div>
        <input type="text" 
        value={inputValue}
        placeholder='Enter Your Task'
        onChange={}/>
        <button className='bg-blue-500 rounded-sm'>Enter</button>
        <p>{inputValue}</p>
    </div>
  )
}

export default Input