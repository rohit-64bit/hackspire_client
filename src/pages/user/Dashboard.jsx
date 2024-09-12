import React from 'react';
import { FaCalendarDays } from "react-icons/fa6";
import { TbSquarePlus } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";


const Dashboard = () => {
    return (
        <>
            <div className='w-full h-full px-4 md:px-14 lg:px-10 xl:px-20 text-[#545454]'>
                <div className='h-[10%] md:h-[20%] text-3xl md:text-5xl font-bold text-[#545454] flex items-center'>Dashboard</div>

                <div className='w-full lg:flex md:gap-3 xl:gap-5 '>

                    <div className='lg:w-[50%] h-[70vh] lg:h-[65vh] flex flex-col gap-6'>
                        <div className='h-[50%] rounded-xl shadow-[rgba(0,0,15,0.2)_2px_2px_9px_3px]'>
                            <div className='w-full flex flex-col items-center pt-3 lg:pt-2 xl:pt-4'>
                                <div className='flex flex-col w-[80%] md:w-[60%]'>
                                    <label className='pl-4 font-semibold' htmlFor="">Meet ID</label>
                                    <input name='password' className='px-4 py-2 lg:py-1.5 xl:py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' />
                                </div>
                                <div className='flex flex-col w-[80%] md:w-[60%]'>
                                    <label className='pl-4 font-semibold' htmlFor="">Meet Link</label>
                                    <input name='password' className='px-4 py-2 lg:py-1.5 xl:py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' />
                                </div>
                                <button className='bg-[#005AAA] mt-4 w-[40%] md:w-[20%] px-5 text-white py-2 lg:py-1.5 xl:py-2  rounded-xl font-semibold '>Join</button>
                            </div>
                            <div></div>
                        </div>
                        <div className='h-[50%] rounded-xl shadow-[rgba(0,0,15,0.2)_2px_2px_9px_3px] flex items-center justify-around md:px-16 px-7'>
                            <div className='flex flex-col items-center gap-3'>
                                <div className='p-4 xl:p-6 rounded-lg bg-[#009788] text-white cursor-pointer'><FaCalendarDays style={{ fontSize: 30 }} /></div>
                                <div className='cursor-default font-semibold'>
                                    Schedule
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <div className='p-4 xl:p-6 rounded-lg bg-[#005AAA] text-white cursor-pointer'><TbSquarePlus style={{ fontSize: 30 }} /></div>
                                <div className='cursor-default font-semibold'>
                                Host
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <div className='p-4 xl:p-6 rounded-lg bg-[#F7941D] text-white cursor-pointer'><SiGooglemeet style={{ fontSize: 30 }} /></div>
                                <div className='cursor-default font-semibold'>
                                History
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[50%] h-[65vh] flex justify-center pt-6 lg:pt-0 pb-10 lg:pb-0'>
                        <div className='w-full lg:w-[90%] rounded-lg h-full shadow-[rgba(0,0,15,0.2)_2px_2px_9px_3px] flex flex-col items-center py-5'>
                            <div className='font-semibold text-xl'>Upcoming Meetings</div>
                            <button className='bg-[#0072D8] mt-4 w-[80%] px-5 text-white py-2 lg:py-1.5 xl:py-2  rounded-2xl font-semibold '>No Upcoming Meetings</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard