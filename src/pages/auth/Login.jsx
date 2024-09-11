import React from 'react'
import logo from '../../assets/images/logo_new 2.png'

const Login = () => {
    return (
        <>
            <div className='h-[100vh] w-full flex text-[#545454]'>

                <div className='px-7 lg:px-5 py-5 w-full md:w-full lg:w-[50%] h-full'>

                    <div><img className='w-[60%] xl:w-[35%] md:w-[40%] lg:w-[45%] ' src={logo} alt="\" /></div>

                    <div className='xl:p-10 md:p-5 lg:p-2 flex flex-col items-center'>
                        <div className='pt-16 md:pt-8 lg:pt-8 cursor-default flex flex-col gap-1 items-center'>
                            <div className='font-bold text-3xl '>Welcome Back !</div>
                            <div className='font-semibold text-xl'>Sign up and register yourself first</div>
                        </div>

                        <div className='flex flex-col w-full md:px-10 gap-2 md:gap-4 pt-10 md:pt-10 lg:px-6'>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">User ID</label>
                                <input className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="email" placeholder='' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Password</label>
                                <input className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="password" placeholder='' />

                            </div>
                            <div className='pt-4'>
                                <button className='bg-[#F7941D] text-white w-full px-5 py-2 rounded-xl font-semibold '>Login</button>
                            </div>
                            <div className='flex gap-1 flex-col'>
                            <div className='flex gap-1 cursor-default'>Forgot password ?<div className='text-[#005AAA] underline cursor-pointer underline-offset-2'>Click here</div></div>
                            <div className='flex gap-1 cursor-default'>Don’t have an account ? <div className='text-[#005AAA] underline underline-offset-2 cursor-pointer'>Register here</div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[100vh] w-[50%] bg-[#005AAA] rounded-l-3xl hidden lg:block'>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Login