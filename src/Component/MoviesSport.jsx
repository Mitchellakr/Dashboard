import React from 'react'
import { ArrowDown2, ArrowRight2 } from 'iconsax-react'

const MoviesSport = () => {

    return (
        <div className='border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-4'>
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-lg">Movies vs Sports</h1>
                <div className="flex items-center gap-1">
                    <p className="text-grayColor">june 2022</p>
                    <ArrowDown2 size={20} />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-4">
                    <div className="flex gap-2 items-center">
                        <div>

                        </div>
                        <p className="text-primaryColor font-semibold ">1,695 <span className='font-normal text-grayColor'>movie tickets sold</span></p>
                    </div>
                    <ArrowRight2 className='text-primaryColor' size='15' />
                </div>
                <div className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-4">
                    <div className="flex gap-2 items-center">
                        <div>

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