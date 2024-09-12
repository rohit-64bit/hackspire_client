import React, { useState } from 'react'
import logo from '../../assets/images/logo_new 2.png'
import { API_SERVER_URL } from '../../services/Helpers'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        type: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleForgetPassword = (e) => {

        e.preventDefault()

        fetch(`${API_SERVER_URL}user/forget-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    toast.success(json.message)
                    navigate('/login')
                } else {
                    toast.error(json.message)
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
            })

    }

    return (
        <>
            <div className='h-[100vh] w-full flex text-[#545454]'>

                <div className='px-7 lg:px-5 py-5 w-full md:w-full lg:w-[50%] h-full'>

                    <div><img className='w-[60%] xl:w-[35%] md:w-[40%] lg:w-[45%] ' src={logo} alt="\" /></div>

                    <div className='xl:p-10 md:p-5 lg:p-2 flex flex-col items-center'>

                        <div className='pt-16 md:pt-8 lg:pt-8 cursor-default flex flex-col gap-1 items-center'>
                            <div className='font-bold text-3xl '>Forget password ?</div>
                            <div className='font-semibold text-xl'>Get a temporary password now</div>
                        </div>

                        <form method='POST' onSubmit={handleForgetPassword} className='flex flex-col w-full md:px-10 gap-2 md:gap-4 pt-10 md:pt-10 lg:px-6'>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">User ID</label>
                                <input
                                    value={formData.email}
                                    onChange={onChange}
                                    name='email'
                                    className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="email" placeholder='' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Account Type</label>
                                <select
                                    onChange={onChange}
                                    name='type'
                                    value={formData.type}
                                    className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' >
                                    <option value="">Select Account Type</option>
                                    <option value="user">User</option>
                                    <option value="institute">Institute</option>
                                </select>

                            </div>

                            <button className='bg-[#F7941D] text-white w-full px-5 py-2 rounded-xl font-semibold mt-4'>Forget Password</button>

                            <div className='flex gap-1 flex-col'>
                                <div className='flex gap-1 cursor-default'>Already have an account ?<Link to='/login' className='text-[#005AAA] underline cursor-pointer'>Click here</Link></div>
                                <div className='flex gap-1 cursor-default'>Don’t have an account ? <Link to='/register' className='text-[#005AAA] underline cursor-pointer'>Register here</Link></div>
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

export default ForgetPassword