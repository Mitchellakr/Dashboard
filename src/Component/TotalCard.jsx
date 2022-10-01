import { ArrowDown2 } from 'iconsax-react'
import React from 'react'
import dollar from '../assets/dollar-circle.svg'

const TotalCard = () => {
    return (
        <div className='grid col-span-4 rounded-xl bg-cardPattern bg-cover bg-no-repeat bg-center p-6 '>
            <div className="flex items-center justify-between">
                <img src={dollar} alt="dollar image" />
                <div className="rounded-full py-1 px-2 border border-solid border-whiteColor flex gap-2 items-center">
                    <p className="text-whiteColor text-[12px]">This year</p>
                    <ArrowDown2 color='white' size={20} />
                </div>
            </div>
            <div className=' mt-12 '>
                <p className="text-whiteColor">Total profit made</p>
                <h1 className="text-3xl text-whiteColor font-semibold">$11,456.90</h1>
            </div>
        </div>
    )
}

export default TotalCard