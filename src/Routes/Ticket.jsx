import React from 'react'
import Navbar from '../Component/Navbar'
import Sidebar from '../Component/Sidebar'

const Ticket = () => {
  return (
    <div className='flex h-auto '>
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <div className='bgdark p-6 bg-bodyColor grid grid-cols-12 gap-6'>
          Tickets
        </div>
      </div>
    </div>
  )
}

export default Ticket