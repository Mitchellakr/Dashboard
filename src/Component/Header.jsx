import React from 'react'
import { useState } from 'react'
// import search from '../assets/search.svg'
import { SearchNormal } from 'iconsax-react'
import flag from '../assets/usa-flag.png'
import arrow from '../assets/arrow-right.svg'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import userAvatar from '../assets/user-avatar.svg'
import { Notification } from 'iconsax-react'

const Header = () => {
    const [toggle, setToggle] = useState('false')

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <header>
            <div className={`${toggle === false ? "bg-bodyDarkColor" : "bg-bodyColor"}`}>
                <div className=' mr-8 py-6 pl-8 flex items-start justify-between border-b-2 border-grayColorLight border-solid border-t-0 border-x-0'>
                    <div className='p-2 px-4 flex border rounded-md border-solid border-grayColorLight items-center gap-3 '>
                        <label htmlFor="search"><SearchNormal size='20' color='gray' /></label>
                        <input id='search' placeholder='Search for a ticket. event or ID' className={`${toggle === false ? "bg-bodyDarkColor" : "bg-bodyColor"} text-md h-full w-[300px] type="text"`} />
                    </div>
                    <div className='flex items-center gap-6'>
                        <div onClick={handleToggle} className={` ${toggle === false ? "bg-grayColor" : "bg-bodyDarkColor"} w-[50px] relative rounded-full h-[25px]`}>
                            <img src={sun} className='left-[4px] top-1/2 absolute translate-y-[-50%]' alt="" />
                            <div className={` ${toggle === false ? "right-[4px]" : "left-[4px]"} h-[15px] w-[15px]  top-1/2 translate-y-[-50%] z-20 rounded-full bg-bodyColor absolute`}></div>
                            <img src={moon} className='right-[4px] top-1/2 absolute translate-y-[-50%]' alt="" />
                        </div>
                        <div className='relative'>
                            <Notification color={toggle === false ? "white" : "black"} />
                            <div className='h-1 w-1 rounded-full bg-primaryColor absolute top-[-5px] right-0'></div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className={`${toggle === false ? "text-bodyColor" : "text-bodyDarkColor"} text-xl`}>EN</h1>
                            <img src={flag} alt="" />
                            <img className='rotate-90' src={arrow} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={userAvatar} alt="" />
                            <h1 className={`${toggle === false ? "text-bodyColor" : "text-bodyDarkColor"} text-xl`}>MM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header