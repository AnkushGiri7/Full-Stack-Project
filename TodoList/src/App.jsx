import { useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'
function App() {

  return (
    <>
      <h1 className='bg-slate-400'>Hello World</h1>
      <Input/>
      <Todos/>
    </>
  )
}

export default App
