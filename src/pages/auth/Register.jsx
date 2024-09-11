import React from 'react'
import logo from '../../assets/images/logo_new 2.png'

const Register = () => {
    return (
        <>
            <div className=''>

                <div className='px-7 py-5 h-full'>

                    <div><img src={logo} alt="" /></div>

                    <div className='w-[50%] p-9 flex flex-col items-center'>
                        <div className='font-bold text-3xl '>Create Your Account</div>
                        <div className='font-semibold text-xl'>Sign up and register yourself first</div>
                        <div className='flex flex-col w-full px-10'>
                            <input className='px-5 py-2 rounded-full outline-none focus:shadow-xl duration-300 bg-gray-100' type="email" placeholder='Enter Email' />
                            <input className='px-5 py-2 rounded-full outline-none focus:shadow-xl lg:focus:shadow-lg duration-300 lg:bg-gray-200/50 bg-gray-100' type="text" placeholder='Enter Name' />
                            <input className='px-5 py-2 rounded-full outline-none focus:shadow-xl lg:focus:shadow-lg duration-300 lg:bg-gray-200/50 bg-gray-100' type="number" placeholder='Enter Contact' />
                            <input className='px-5 py-2 rounded-full outline-none focus:shadow-xl lg:focus:shadow-lg duration-300 lg:bg-gray-200/50 bg-gray-100' type="text" placeholder='Enter user type' />
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default Register