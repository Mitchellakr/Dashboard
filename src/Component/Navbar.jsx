import React from 'react'
import { useState } from 'react'
import { SearchNormal } from 'iconsax-react'
import flag from '../assets/usa-flag.png'
import arrow from '../assets/arrow-right.svg'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import userAvatar from '../assets/user-avatar.svg'
import { Notification } from 'iconsax-react'
import { DarkModeContext } from '../context/darkModeContext'
import { useContext } from 'react'

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);

    const [toggle, setToggle] = useState('false')

    const handleToggle = () => {
        setToggle(!toggle)
        dispatch({ type: 'TOGGLE' })
        // console.log(dispatch)
    }
    return (
        <header>
            <div className='nav bg-bodyColor'>
                <div className=' mr-8 py-4 pl-8 flex items-center justify-between border-b-2 border-grayColorLight border-solid border-t-0 border-x-0'>
                    <div className='p-2 px-4 flex border rounded-md border-solid border-grayColorLight items-center gap-3 '>
                        <label htmlFor="search"><SearchNormal size='20' color='gray' /></label>
                        <input id='search' placeholder='Search for a ticket. event or ID' type="text" className='bg-bodyColor text-md h-full w-[300px] ' />
                    </div>
                    <div className='flex items-center gap-6'>
                        <div onClick={handleToggle} className='bg-bodyDarkColor bgwhite w-[50px] relative rounded-full h-[25px]'>
                            <img src={sun} className='left-[4px] top-1/2 absolute translate-y-[-50%]' alt="" />
                            <div className={` ${toggle === false ? "right-[4px] bg-bodyDarkColor" : "left-[4px] "} h-[15px] w-[15px]  top-1/2 translate-y-[-50%] z-20 rounded-full bg-bodyColor absolute`}></div>
                            {/* <div className='move h-[15px] w-[15px]  top-1/2 translate-y-[-50%] z-20 rounded-full bg-bodyColor absolute'></div> */}
                            <img src={moon} className='right-[4px] top-1/2 absolute translate-y-[-50%]' alt="" />
                        </div>
                        <div className='relative'>
                            <Notification className='text-bodyDarkColor textwhite' />
                            {/* <Notification color={toggle === false ? "white" : "black"} /> */}
                            <div className='h-1 w-1 rounded-full bg-primaryColor absolute top-[-5px] right-0'></div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-bodyDarkColor text-xl textwhite'>EN</h1>
                            <img src={flag} alt="" />
                            <img className='rotate-90' src={arrow} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={userAvatar} alt="" />
                            <h1 className='text-bodyDarkColor text-xl textwhite'>MM</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar