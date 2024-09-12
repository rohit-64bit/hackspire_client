import { Button, Tooltip } from '@nextui-org/react';
import React from 'react'
import { MdOutlineMeetingRoom, MdPersonOutline, MdOutlineSettings, MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { Link, NavLink, useNavigate } from 'react-router-dom';


const SideBar = () => {

    const navigate = useNavigate()

    const navRoutes = [
        {
            name: "Home",
            link: "/user/dashboard",
            icon: MdOutlineDashboard
        },
        {
            name: "Meeting",
            link: "/user/meeting",
            icon: MdOutlineMeetingRoom
        },
        {
            name: "Profile",
            link: "/user/profile",
            icon: MdPersonOutline
        },
        {
            name: "Settings",
            link: "/user/settings",
            icon: MdOutlineSettings
        }
    ]

    const handleLogout = () => {

        localStorage.clear()
        navigate('/')

    }

    return (
        <div className='w-max h-screen px-2 pt-20 pb-10 flex flex-col justify-between items-center bg-white card-shadow'>

            <nav className='flex flex-col gap-3'>

                {
                    navRoutes.map((route, index) => {
                        return (

                            <Tooltip
                                key={index}
                                showArrow
                                placement="right"
                                content={
                                    <p className='text-[10px] text-white bg-slate-500'>{route.name}</p>
                                }
                                className='bg-slate-500'
                            >

                                <NavLink to={route.link} className={({ isActive }) => (isActive ? 'flex items-center gap-2 py-2 px-3 md:px-4 bg-black text-white rounded-lg duration-300 transition-all ease-in-out' : 'flex items-center gap-2 py-2 px-3 md:px-4 hover:bg-slate-300 hover:text-slate-600 rounded-lg duration-300 transition-all ease-in-out text-black')}>
                                    <route.icon fontSize={20} />
                                </NavLink>

                            </Tooltip>
                        )
                    })
                }

            </nav>

            <button
                onClick={handleLogout}
                className='flex items-center gap-2 py-2 px-3 md:px-4 hover:bg-red-600 hover:text-white duration-300 transition-all ease-in-out rounded-lg'
            >
                <MdOutlineLogout fontSize={20} />
            </button>

        </div>
    )
}

export default SideBar