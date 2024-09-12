import { Button } from '@nextui-org/react'
import React from 'react'
import FormatDateTime from '../utils/FormatDateTime'
import { Link } from 'react-router-dom'

const UpcomingMeeting = ({ data }) => {

    const formatedDate = FormatDateTime(data?.date)

    return (
        <div className='p-5 flex bg-white rounded-xl gap-10 items-center'>
            <div className='flex flex-col items-center justify-center w-max'>
                <p className='text-xl'>{
                    formatedDate?.slice(0, 3)
                }</p>
                <p className='text-3xl'>{
                    formatedDate?.split(',')[2].split(' ')[2]
                }</p>
            </div>
            <div className='w-full flex flex-col justify-between h-full'>
                <p className='text-xl font-semibold'>{data?.title}</p>
                <p className='text-gray-500'>{
                    formatedDate?.split(',')[1]
                }</p>
            </div>
            <Button as={Link} to={`/room/${data.link}`} className='bg-blue-500 text-white'>
                Join
            </Button>
        </div>
    )
}

export default UpcomingMeeting