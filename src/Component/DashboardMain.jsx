import React from 'react'
import MovieSport from './MovieSport'
import TicketAreaChart from './TicketAreaChart'
import TotalCard from './TotalCard'
import Welcome from './Welcome'

const DashboardMain = () => {
    return (
        <div className='p-6 bg-bodyColor grid grid-cols-12 gap-6'>
            <Welcome />
            <TicketAreaChart />
            <TotalCard />
            <MovieSport />
        </div>
    )
}

export default DashboardMain