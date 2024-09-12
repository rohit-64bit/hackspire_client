import React, { useState } from 'react'
import ScheduleMeeting from '../../components/ScheduleMeeting'
import UpcomingMeeting from '../../components/UpcomingMeeting'
import PreviousMeeting from '../../components/PreviousMeeting'

const MeetingDetails = () => {

    const allowedView = [
        'upcoming',
        'previous',
        'schedule'
    ]

    const [renderData, setRenderData] = useState('upcoming')



    return (
        <main className="main">

            <div className='h-max mb-10 text-xl md:text-3xl font-bold text-[#545454] flex items-center '>Meetings</div>

            <div className='text-lg'>

                {
                    allowedView.map((view, index) => {
                        return (
                            <button key={index} onClick={e => setRenderData(view)} className={view === renderData ? 'py-2 px-4 border-b-2 border-blue-500' : 'py-2 pr-4 border-b-2 border-slate-200 hover:border-blue-500'}>{view}</button>
                        )
                    })
                }
                {/* <div className='border-b-2 border-slate-500 w-max' /> */}

            </div>

            <div>

                {
                    renderData === 'upcoming' && (
                        <div className='flex flex-col gap-5 h-[60vh] overflow-auto py-10'>
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                            <UpcomingMeeting />
                        </div>
                    )
                }

                {
                    renderData === 'previous' && (
                        <div className='flex flex-col gap-5 h-[60vh] overflow-auto py-10'>
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                            <PreviousMeeting />
                        </div>
                    )
                }

                {
                    renderData === 'schedule' && (
                        <ScheduleMeeting />
                    )
                }

            </div>

        </main >
    )
}

export default MeetingDetails