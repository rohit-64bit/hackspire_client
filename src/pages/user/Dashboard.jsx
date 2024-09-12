import React from 'react';
import { FaCalendarDays } from "react-icons/fa6";
import { TbSquarePlus } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";


const Dashboard = () => {
    return (
        <>
            <main className='main'>

                <div className='h-max mb-10 text-xl md:text-3xl font-bold text-[#545454] flex items-center '>Dashboard</div>

                <div className='w-full lg:flex md:gap-3 xl:gap-5 '>

                    <div className='lg:w-[50%] h-[80vh] lg:h-[70vh] flex flex-col gap-6'>

                        <div className='h-[50%] rounded-xl card-shadow p-5'>
                            <form className='w-full flex flex-col items-center '>
                                <div className='flex flex-col w-[80%] md:w-[60%]'>
                                    <label className='pl-4 font-semibold' htmlFor="">Meet ID</label>
                                    <input name='password' className='px-4 py-2 lg:py-1.5 xl:py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' />
                                </div>

                                <div className='flex gap-5 justify-center items-center'>

                                    <div className='border w-[5vw] h-0 rounded-full' />

                                    <div>
                                        or
                                    </div>

                                    <div className='border w-[5vw] h-0 rounded-full' />

                                </div>

                                <div className='flex flex-col w-[80%] md:w-[60%]'>
                                    <label className='pl-4 font-semibold' htmlFor="">Meet Link</label>
                                    <input name='password' className='px-4 py-2 lg:py-1.5 xl:py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' />
                                </div>
                                <button className='bg-[#005AAA] mt-4 w-max px-5 text-white py-2 lg:py-1.5 xl:py-2  rounded-xl font-semibold '>
                                    Join Meeting
                                </button>
                            </form>
                            <div></div>
                        </div>

                        <div className='h-[50%] rounded-xl card-shadow flex items-center justify-around'>
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

                    <div className='lg:w-[50%] h-[70vh] flex justify-center pt-6 lg:pt-0 pb-10 lg:pb-0'>
                        <div className='w-full lg:w-[90%] rounded-lg h-full card-shadow flex flex-col items-center py-5'>
                            <div className='font-semibold text-xl'>Upcoming Meetings</div>
                            <button className='bg-[#0072D8] mt-4 w-[80%] px-5 text-white py-2 lg:py-1.5 xl:py-2  rounded-2xl font-semibold '>No Upcoming Meetings</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dashboard