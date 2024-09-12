import { Button } from '@nextui-org/react'
import React from 'react'

const UpcomingMeeting = () => {
    return (
        <div className='p-5 flex bg-white rounded-xl gap-10 items-center'>
            <div className='flex flex-col items-center justify-center w-max'>
                <p className='text-xl'>Thu</p>
                <p className='text-3xl'>20</p>
            </div>
            <div className='w-full flex flex-col justify-between h-full'>
                <p className='text-xl font-semibold'>Meeting Title</p>
                <p className='text-gray-500'>10:00 AM</p>
            </div>
            <Button className='bg-blue-500 text-white'>
                Join
            </Button>
        </div>
    )
}

export default UpcomingMeeting