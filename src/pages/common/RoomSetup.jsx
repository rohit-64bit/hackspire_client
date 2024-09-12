import { Button } from '@nextui-org/react'
import React from 'react'

const RoomSetup = () => {

    

    return (
        <div className='flex justify-center items-center h-screen'>

            <form method='POST' action="" className='flex flex-col gap-2 h-max'>

                <input type="text" placeholder='Enter Meeting Code' className='outline outline-2 outline-slate-400 rounded-lg p-2' />

                <Button className='p-2 rounded-lg'>
                    Join Meeting
                </Button>

            </form>

        </div>
    )
}

export default RoomSetup