import React from 'react'
import { Button } from '@nextui-org/react'
import { BsCameraVideo, BsCameraVideoOff, BsMic, BsMicMute, BsPhoneLandscape, BsPersonLinesFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";

const Room = () => {

    return (
        <>
            <div className='h-screen flex gap-5 p-5'>

                <div className='w-[70%] flex flex-col gap-5'>

                    {/* video sections */}
                    <div className='bg-white h-[90%] card-shadow rounded-xl'>

                    </div>

                    {/* controls */}
                    <div className='h-[10%] bg-white card-shadow rounded-xl flex justify-center items-center gap-5'>

                        <Button>

                        </Button>

                    </div>

                </div>

                <div className='w-[30%] h-full bg-white card-shadow rounded-xl'>
                    {/* chat box */}
                    {/* participants info */}
                </div>

            </div>
        </>
    )
}

export default Room