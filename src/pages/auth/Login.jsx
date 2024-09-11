import React, { useState } from 'react'
import logo from '../../assets/images/logo_new 2.png'
import { API_SERVER_URL } from '../../services/Helpers'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        type: 'user'
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const userLogin = () => {

        fetch(`${API_SERVER_URL}user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    localStorage.setItem('user-token', json.token)
                    toast.success(json.message)
                } else {
                    toast.error(json.message)
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
            })

    }

    const adminLogin = () => {

        fetch(`${API_SERVER_URL}admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    localStorage.setItem('admin-auth-token', json.token)
                    toast.success(json.message)
                } else {
                    toast.error(json.message)
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
            })

    }

    const handleLogin = (e) => {

        e.preventDefault()

        if (formData.type === 'admin') {
            adminLogin()
        } else {
            userLogin()
        }

    }

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

                        <form method='POST' onSubmit={handleLogin} className='flex flex-col w-full md:px-10 gap-2 md:gap-4 pt-10 md:pt-10 lg:px-6'>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">User ID</label>
                                <input name='email' value={formData.email} onChange={onChange} className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="email" placeholder='' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Password</label>
                                <input name='password' value={formData.password} onChange={onChange} className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="password" placeholder='' />

                            </div>

                            <div className='flex flex-col'>

                                <label className='pl-4 font-semibold' htmlFor="">User Type</label>

                                <select name='type' value={formData.type} onChange={onChange} className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="password" placeholder='' >
                                    <option value="user">User</option>
                                    <option value="institute">Institute</option>
                                    <option value="admin">Admin</option>
                                </select>

                            </div>

                            <button type='submit' className='mt-4 bg-[#F7941D] text-white w-full px-5 py-2 rounded-xl font-semibold '>Login</button>

                            <div className='flex gap-1 flex-col'>

                            <div className='flex gap-1 cursor-default'>Forgot password ?<div className='text-[#005AAA] underline cursor-pointer underline-offset-2'>Click here</div></div>
                            <div className='flex gap-1 cursor-default'>Don’t have an account ? <div className='text-[#005AAA] underline underline-offset-2 cursor-pointer'>Register here</div></div>

                                <div className='flex gap-1 cursor-default'>Forgot password ?<Link to='/forget-password' className='text-[#005AAA] underline cursor-pointer'>Click here</Link></div>
                                <div className='flex gap-1 cursor-default'>Don’t have an account ? <Link to='/register' className='text-[#005AAA] underline'>Register here</Link></div>

                            </div>
                        </form>
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