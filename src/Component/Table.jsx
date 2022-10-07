import React from 'react'
import { ArrowDown2, ArrowLeft2, ArrowRight2 } from 'iconsax-react'
// import { data } from 'autoprefixer'

const Table = () => {

    const tableData = [
        {
            ticketid: 425718,
            name: 'Asake of lagos',
            location: 'lagos',
            Date: '17-7-2021',
            price: '45.80',
            status: 'Success',
        },
        {
            ticketid: 753589,
            name: 'Grammy 2022',
            location: 'Paris',
            Date: '19-7-2021',
            price: '73.80',
            status: 'Success',
        },
        {
            ticketid: 853432,
            name: 'French Open',
            location: 'Turkey',
            Date: '20-7-2021',
            price: '17.95',
            status: 'Failed',
        },
        {
            ticketid: 532870,
            name: 'Man U vs Man City',
            location: 'Manchester',
            Date: '22-7-2021',
            price: '45.80',
            status: 'Pending',
        },

    ]
    return (
        <div className='carddark border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-12'>
            <div className="flex justify-between items-center pb-3">
                <h1 className="textwhite text-3xl">Ticket Sales History</h1>
                <div className='flex gap-2 items-center'>
                    <div className="flex items-center gap-1">
                        <p className="text-grayColor">Price</p>
                        <ArrowDown2 size={20} color='#a3a3a3' />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-grayColor">Recent</p>
                        <ArrowDown2 size={20} color='#a3a3a3' />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-grayColor">Status</p>
                        <ArrowDown2 size={20} color='#a3a3a3' />
                    </div>
                </div>
            </div>
            <div>
                <table className='w-full'>
                    <thead className="border-collapse w-fullS">
                        <tr className='text-left textwhite  bg-grayColorVeryLight'>
                            <th className='py-3 pl-10 rounded-tl-lg rounded-bl-lg'>Ticket ID</th>
                            <th className='py-3'>Event Name</th>
                            <th className='py-3'>Location</th>
                            <th className='py-3'>Date</th>
                            <th className='py-3'>Price</th>
                            <th className='py-3 rounded-tr-lg rounded-br-lg'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-left '>
                        {
                            tableData.map((data) => (
                                <tr key={data.id}>
                                    <td className='py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor pl-10'><p>{data.ticketid}</p></td>
                                    <td className='py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor'><p>{data.name}</p></td>
                                    <td className='py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor'><p>{data.location}</p></td>
                                    <td className='py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor'><p>{data.Date}</p></td>
                                    <td className='py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor'><p>${data.price}</p></td>
                                    <td className={`{py-3 border-solid border-b border-grayColorLight border-x-0 border-t-0 text-grayColor`}><div className={` rounded-full flex justify-center w-[80px] p-1 ${data.status}`}><p>{data.status}</p></div> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            <div className="flex items-center gap-2 justify-end pt-5">
                <div className='flex items-center text-grayColor'>
                    <p>1 of 8</p>
                    <div className="flex items-center">
                        <ArrowLeft2 size={14} />
                        <ArrowRight2 size={14} />
                    </div>
                </div>
                <div className="text-primaryColor flex items-center">
                    <p >view all</p>
                    <span><ArrowRight2 size={14} /></span>
                </div>
            </div>
        </div>
    )
}

export default Table