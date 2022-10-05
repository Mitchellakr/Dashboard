import React from 'react'
import { ArrowDown2, ArrowRight2 } from 'iconsax-react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const moviepercentage = 33;
const sportpercentage = 67;

const MoviesSport = () => {

    return (
        <div className='carddark border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-4'>
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-lg textwhite">Movies vs Sports</h1>
                <div className="flex items-center gap-1">
                    <p className="text-grayColor">june 2022</p>
                    <ArrowDown2 size={20} color='#a3a3a3'/>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-4">
                    <div className="flex gap-2 items-center">
                        <div className='w-10 h-10'>
                            <CircularProgressbar value={moviepercentage} text={`${moviepercentage}%`} strokeWidth={10} styles={buildStyles({ pathColor: '#0038FF', textColor: '#0038FF', textSize: '24px', strokeLinecap: 'butt' })} />
                        </div>
                        <p className="text-primaryColor font-semibold ">1,695 <span className='font-normal text-grayColor'>movie tickets sold</span></p>
                    </div>
                    <ArrowRight2 className='text-primaryColor' size='15' />
                </div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-4">
                    <div className="flex gap-2 items-center">
                        <div className='w-10 h-10'>
                            <CircularProgressbar value={sportpercentage} text={`${sportpercentage}%`} strokeWidth={10} styles={buildStyles({ pathColor: '#0038FF', textColor: '#0038FF', textSize: '24px', strokeLinecap: 'butt' })} />
                        </div>
                        <p className="text-primaryColor font-semibold ">3,352 <span className='font-normal text-grayColor'>sports tickets sold</span></p>
                    </div>
                    <ArrowRight2 className='text-primaryColor' size='15' />
                </div>
            </div>
        </div>
    )
}

export default MoviesSport