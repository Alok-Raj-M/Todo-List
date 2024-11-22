import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pt-2 pl-4 pr-4 pb-2 bg-blue-700 text-white '>
     <div>
        <span className='cursor-pointer hover:font-bold hover:duration-200 transition-all'>iTask</span>
     </div>
     <div className='flex gap-5'>
        <h1 className='cursor-pointer hover:font-bold hover:duration-200 transition-all '>Home</h1>
        <h1 className='cursor-pointer hover:font-bold hover:duration-200 transition-all '>Tour Task</h1>
     </div>
    </div>
  )
}

export default Navbar
