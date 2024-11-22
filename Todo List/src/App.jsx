import React from 'react'
import Navbar from './Component/Navbar'
import Todo from './Component/Todo'

const App = () => {
  return (
    <div>
      <>
      <Navbar />
      <h1 className='text-center mt-3 text-gray-900 hover:ease-in hover:text-blue-800 hover:duration-100  cursor-pointer text-2xl bold transition-all'> My Todo List Create by (Alok Raj)</h1>
      <Todo />
      </>
    </div>
  )
}

export default App
