import React, { useState } from 'react'

const Input = ({addTodoInList}) => {
    const[inputValue,setInputValue] = useState("")
    const handlePressEnter=(e)=>{
      if(e.keyCode === 13){
        addTodoInList(inputValue)
        setInputValue("")
      }
    }
  return (
    <div className='flex items-center bg-slate-200 '>
        <input type="text" 
        value={inputValue}
        placeholder='Enter Your Task'
        onChange={e =>setInputValue(e.target.value)}
        onKeyDown={handlePressEnter}
        className='w-60 m-5 p-3 bg-blue-200 rounded-md border-solid'/>

        <button className='bg-blue-500 rounded-md h-12 p-2 hover:bg-blue-700 text-base'
        onClick={()=>{
            addTodoInList(inputValue)
            setInputValue("")
        }}>Enter</button>
    </div>
  )
}

export default Input