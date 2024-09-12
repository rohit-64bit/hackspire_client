import React from 'react';
import { Avatar } from '@nextui-org/react'
import Logo from '../assets/images/Group 1.png'

const Header = () => {
    return (
        <header className='w-full py-3 bg-black flex justify-between px-0 lg:px-0 items-center'>

            <img src={Logo} className='w-[40%] md:w-[15%]' />

            <Avatar src='' alt='' />

        </header>
    )
}

export default Header