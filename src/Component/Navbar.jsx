import React from 'react'

// icons used 
import star from '../assets/star.svg'
import { Category } from 'iconsax-react'
import { Setting2 } from 'iconsax-react'
import { Tag } from 'iconsax-react'
import { Ticket } from 'iconsax-react'
import { Profile2User } from 'iconsax-react'
import { Message } from 'iconsax-react'
import { LogoutCurve } from 'iconsax-react'

// links 

import { Link } from 'react-router-dom'

const navlinks = [
    {
        id: 1,
        icon: <Category size='20' variant='Bold' />,
        navname: 'Dashboard',
        path: '/Dashboard'
    },
    {
        id: 2,
        icon: <Tag size='20' />,
        navname: 'Order',
        path: '/Order'
    },
    {
        id: 3,
        icon: <Ticket size='20' />,
        navname: 'Ticket',
        path: '/Ticket'
    },
    {
        id: 4,
        icon: <Profile2User size='20' />,
        navname: 'Customer',
        path: '/Customer'
    },
    {
        id: 5,
        icon: <Message size='20' />,
        navname: 'Messages',
        path: '/Message'
    },
    {
        id: 6,
        icon: <Setting2 size='20' />,
        navname: 'Settings',
        path: '/Settings'
    }
]
const Navbar = () => {
    return (
        <div className=' h-auto absolute w-60 bg-bodyColor border-r-2 border-solid border-grayColorLight border-y-0 border-l-0'>
            {/* <div className=' h-full bg-bodyColor border-r-2 border-solid border-grayColorLight border-y-0 border-l-0'> */}
            <div className='w-full py-8'>
                <h1 className='text-3xl font-semibold flex flex-col items-center'>
                    <span>Ticcki</span><span>Cassa</span>
                </h1>
            </div>
            <div className="menu pb-5 pt-4 flex flex-col gap-[10em]">
                <div>
                    {
                        navlinks.map((navlink) => (
                            <Link to={navlink.path} key={navlink.id} className='text-grayColor mb-2 cursor-pointer flex items-center gap-4 hover:border-4 hover:border-solid hover:border-primaryColor hover:border-y-0 hover:border-r-0 hover:text-primaryColor font-bold pl-[3em] py-3'>
                                {navlink.icon}
                                <p>{navlink.navname}</p>
                            </Link>
                        ))
                    }
                    <div className='cursor-pointer flex items-center gap-4 hover:border-4 hover:border-solid hover:border-redColor hover:border-y-0 hover:border-r-0 hover:text-redColor font-bold pl-[3em] py-3 my-10'>
                        <LogoutCurve size='20' />
                        <p className='text-redColor'>logout</p>
                    </div>
                </div>

                <div className='pt-12 mx-4 border-t-2 border-t-grayColorLight border-solid border-x-0 border-b-0 '>
                    <div className=' flex flex-col gap-3'>
                        <div className='text-grayColor text-center rounded-xl bg-grayColorLight p-4 border-solid border border-grayColor relative'>
                            <img className='absolute top-[-10px] left-[50%] translate-x-[-50%]' src={star} alt="" />
                            <p>Sell unlimited tickets per month, reach more customers</p>
                        </div>
                        <button className='w-full py-3 rounded-lg text-whiteColor bg-primaryColor hover:opacity-80'>Go Pro</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar