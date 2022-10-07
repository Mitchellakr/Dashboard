import React from 'react'
import MoviesSport from '../Component/MoviesSport'
import Navbar from '../Component/Navbar'
import New from '../Component/New'
import Sidebar from '../Component/Sidebar'
import Table from '../Component/Table'
import TicketChart from '../Component/TicketChart'
import TotalCard from '../Component/TotalCard'
import Welcome from '../Component/Welcome'

const Dashboard = () => {
  return (
    <div className='flex h-full'>
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <div className='bgdark p-6 bg-bodyColor grid grid-cols-12 gap-6'>
          <Welcome />
          <TicketChart />
          <TotalCard />
          <MoviesSport />
          <New />
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Dashboard