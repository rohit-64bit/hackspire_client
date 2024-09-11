import React from 'react'
import Logo from '../assets/images/logo_new 2.png'
import { Avatar } from '@nextui-org/react'

const Header = () => {
    return (
        <header className='w-full py-4 bg-black flex justify-between px-5 lg:px-10 items-center'>

            <img src={Logo} className='w-20' />

            <Avatar src='' alt='' />

        </header>
    )
}

export default Header