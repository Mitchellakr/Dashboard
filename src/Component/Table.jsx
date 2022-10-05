import React from 'react'
import { ArrowDown2 } from 'iconsax-react'

const Table = () => {
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
                <table>

                </table>
            </div>
        </div>
    )
}

export default Table