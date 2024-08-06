import { useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'
function App() {
  const[todoList,setTodoList] = useState([])
  
  let addTodoInList = (inputValue)=>{
    if(inputValue !== ''){
      setTodoList([...todoList,inputValue])
    }
  }
  let deleteItem =(key)=>{
    let newTodoList = [...todoList]
    newTodoList.splice(key,1)
    setTodoList(newTodoList)
  }
  return (
    <>
    <div className='w-96 justify-center bg-slate-300 h-96 mx-auto rounded-md'>
      <h1 className='bg-slate-400 h-12 text-center mt-2 pt-2 rounded-t-md text-2xl'>Todo-App</h1>
      <Input addTodoInList = {addTodoInList}/>
      {todoList.map((item,key)=>{
        return(
          <Todos item={item} key={key} deleteItem={deleteItem} index={key}/>
        )
      })}
    </div>
    </>
  )
}

export default App
