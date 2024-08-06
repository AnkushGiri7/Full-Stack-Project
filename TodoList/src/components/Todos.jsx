import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const Todos = (props) => {
  
  return (
    <div>
        <ul>
            <li className='flex items-center justify-around bg-slate-400 rounded-md mt-2 w-72 mx-auto h-12'>
                <p className='text-center'>{props.item}</p>
                <button onClick={e=>{props.deleteItem(props.index)}}
                  className='bg-red-500 p-2 rounded-full'><AiFillDelete /></button>
            </li>
        </ul>
    </div>
  )
}

export default Todos