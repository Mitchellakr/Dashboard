import React from 'react'
import avatar1 from '../assets/avatar-1.svg'
import avatar2 from '../assets/avatar-2.svg'
import avatar3 from '../assets/avatar-3.svg'
import avatar4 from '../assets/avatar-4.svg'

const New = () => {
    return (
        <div className='carddark relative border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-4 '>
            <div className="px-3 py-1 absolute top-[-15px] translate-x-[-50%] left-[50%] rounded-full bg-yellowColor text-whiteColor">NEW</div>
            <div className='flex justify-center items-center mt-3'>
                <img src={avatar1} className='' alt="" />
                <img src={avatar2} className='ml-[-15px]' alt="" />
                <img src={avatar3} className='ml-[-15px]' alt="" />
                <img src={avatar4} className='ml-[-15px]' alt="" />
            </div>
            <div className='textwhite my-4 text-center leading-none '>
                <p>Find event holders near you, sell their tickets, earn commission</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <button className='text-whiteColor px-6 py-2 rounded-lg bg-primaryColor'>Get started</button>
                <button className='text-primaryColor px-6 py-2'>Learn more</button>
            </div>
        </div>
    )
}

export default New