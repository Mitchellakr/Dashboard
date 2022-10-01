import { ArrowRight2 } from 'iconsax-react';
import handwave from '../assets/handwave.svg'
import React from 'react'
import warning from "../assets/warning.svg";

const Tasks = [
    {
        id: 1,
        todo: 'Set up two factor authentication'
    },
    {
        id: 2,
        todo: 'Finish up company profile'
    },
    {
        id: 3,
        todo: 'Verify your email address'
    },
]

const Welcome = () => {
    return (
        <div className='border-2 border-grayColorLight border-solid rounded-xl p-6 bg-whiteColor grid col-span-5'>
            <div className='text-4xl pb-3'>
                <h1>Welcome back,</h1>
                <div className='flex items-center gap-2'>
                    <h1 className="font-bold">Miranda</h1>
                    <img src={handwave} alt="wave emoji" />
                </div>
            </div>
            <div className='text-[12px] rounded-lg bg-bodyColor p-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={warning} alt="warning icon" />
                    <p className='text-grayColor'>You've not set a monthly sales target.</p>
                </div>
                <div className="flex items-center text-primaryColor">
                    <p>Set target</p>
                    <ArrowRight2 size='14' />
                </div>
            </div>
            <div className="flex justify-between py-3 items-center">
                <p className="text-primaryColor text-lg">Complete your profile</p>
                <p className="text-grayColorLight text-sm">1 of 3</p>
            </div>
            <div>
                {
                    Tasks.map((task) => (
                        <div key={task.id} className="flex justify-between items-center border-t border-solid border-b-0 border-x-0 border-grayColorLight py-3">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="" id="" />
                                <p className="text-grayColor">{task.todo}</p>
                            </div>
                            <ArrowRight2 className='text-primaryColor' size='15' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Welcome