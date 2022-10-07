import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDown2 } from 'iconsax-react'

const data = [
    {
        name: 'Jan',
        uv: 1000,
        // amt: 2400,
    },
    {
        name: 'Feb',
        uv: 2000,
        // amt: 2210,
    },
    {
        name: 'March',
        uv: 2200,
        amt: 2290,
    },
    {
        name: 'April',
        uv: 2080,
        // amt: 2000,
    },
    {
        name: 'May',
        uv: 2090,
        // amt: 2181,
    },
    {
        name: 'June',
        uv: 2390,
        // amt: 2500,
    },
    {
        name: 'july',
        uv: 3200,
        // amt: 2100,
    },
    {
        name: 'Aug',
        uv: 2190,
        // amt: 2100,
    },
    {
        name: 'Sept',
        uv: 2590,
        // amt: 2100,
    },
    {
        name: 'Oct',
        uv: 2590,
        // amt: 2100,
    },
    {
        name: 'Nov',
        uv: 3490,
        // amt: 2100,
    },
    {
        name: 'Dec',
        uv: 2090,
        // amt: 2100,
    },
];


function TicketChart() {
    return (
        <div className=' carddark border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-7'>
            <div className="flex justify-between items-center pb-3  border-b-2  border-solid border-0 border-grayColorLight">
                <h1 className="textwhite text-3xl">Ticket Sales Chart</h1>
                <div className="flex items-center gap-1">
                    <p className="text-grayColor">june 2022</p>
                    <ArrowDown2 size={20} color='#a3a3a3' />
                </div>
            </div>
            <div className='pt-4'>
                <ResponsiveContainer width='100%' >
                    <AreaChart height={250} width={100} data={data}

                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} strokeOpacity={.4} />
                        <Tooltip color='red'/>
                        <Area type="monotone" dataKey="uv" strokeWidth={3} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer></div>
        </div>
    )
}

export default TicketChart