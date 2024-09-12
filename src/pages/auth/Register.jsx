import React, { useState } from 'react'
import logo from '../../assets/images/logo_new 2.png'
import register from '../../assets/images/register.svg'
import { API_SERVER_URL } from '../../services/Helpers'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        contactNo: '',
        type: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {

        e.preventDefault()

        fetch(`${API_SERVER_URL}user/register`, {
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
                        <div className='md:pt-0 pt-8 lg:pt-8 cursor-default flex flex-col gap-1 items-center'>
                            <div className='font-bold text-3xl '>Create Your Account</div>
                            <div className='font-semibold text-xl'>Sign up and register yourself first</div>
                        </div>

                        <form method='POST' onSubmit={handleRegister} className='flex flex-col w-full md:px-10 gap-2 md:gap-4 pt-10 md:pt-10 lg:px-6'>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Email</label>
                                <input
                                    onChange={onChange}
                                    name='email'
                                    value={formData.email}
                                    className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="email" placeholder='' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Name</label>
                                <input
                                    onChange={onChange}
                                    name='fullName'
                                    value={formData.fullName}
                                    className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="text" placeholder='' />

                            </div>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">Contact</label>
                                <input
                                    onChange={onChange}
                                    name='contactNo'
                                    value={formData.contactNo}
                                    className='px-4 py-2 rounded-xl outline-none bg-gray-100 border focus:border-black' type="number" placeholder='' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='pl-4 font-semibold' htmlFor="">User Type</label>
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

                            <button className='bg-[#F7941D] text-white w-full px-5 py-2 rounded-xl font-semibold mt-4'>Register Now</button>

                            <p className='text-xs'>
                                Note: Once you are registerd an Admin will verify your account and the password will be sent to your email.
                            </p>

                        </form>
                    </div>
                </div>

                <div className='h-[100vh] w-[50%] bg-[#005AAA] rounded-l-3xl hidden lg:block'>
                    <div className='text-white flex justify-end pt-10 px-5'>
                        <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>Sign In</div>
                        <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>Support</div>
                    </div>
                    <div className='flex pt-10 justify-center'>
                        <img className='w-[60%]' src={register} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register