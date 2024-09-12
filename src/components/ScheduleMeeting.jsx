import { Button } from '@nextui-org/react'
import React from 'react'

const ScheduleMeeting = () => {
    return (
        <form action="" className='flex flex-col gap-4 py-10'>

            <h1 className='text-2xl font-semibold text-[#545454]'>Schedule Meeting</h1>

            <input className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' placeholder='Title of meeting' required type="text" />

            <textarea className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' placeholder='Description of meeting' name="description" rows={3} id="" required></textarea>

            <input type="datetime-local" className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' required name='' />

            <Button className='bg-[#005AAA] text-white rounded-lg py-2 px-5'>
                Schedule
            </Button>

        </form>
    )
}

export default ScheduleMeeting