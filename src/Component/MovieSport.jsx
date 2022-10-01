import React from 'react'
import Chart from "react-apexcharts";
import { ArrowDown2, ArrowRight2 } from 'iconsax-react'

const MS = [
    {
        id: 1,
        sold: '1.695'
    },
    {
        id: 2,
        sold: '3,352'
    },
]

const progressPercentage = "10"

const MovieSport = () => {
    return (
        <div className='border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-4'>
            <div className="flex justify-between items-center">
                <h1 className="text-lg">Movies vs Sports</h1>
                <div className="flex items-center gap-1">
                    <p className="text-grayColor">june 2022</p>
                    <ArrowDown2 size={20} />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-3">
                    <div className="flex gap-2 items-center">
                        <div className=' h-1 w-full rounded-full bg-grayColorLight'>
                            <div style={{ width: `${progressPercentage}% ` }} className={`h-full ${progressPercentage < 70 ? 'bg-redColor' : 'bg-greenColor'}`}></div>
                        </div>
                        <p className="text-primaryColor font-semibold ">1,695 <span className='font-normal text-grayColor'>movie tickets sold</span></p>
                    </div>
                    <ArrowRight2 className='text-primaryColor' size='15' />
                </div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-3">
                    <div className="flex gap-2 items-center">
                        <div>

                        </div>
                        <p className="text-primaryColor font-semibold ">3,352 <span className='font-normal text-grayColor'>movie tickets sold</span></p>
                    </div>
                    <ArrowRight2 className='text-primaryColor' size='15' />
                </div>
            </div>
        </div >
    )
}

export default MovieSport