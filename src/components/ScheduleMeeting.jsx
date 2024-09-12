import { Button } from '@nextui-org/react'
import React, { useContext, useState } from 'react'
import { API_SERVER_URL } from '../services/Helpers'
import { toast } from 'react-toastify'
import MainContext from '../contexts/MainContext'

const ScheduleMeeting = () => {

    const {
        fetchUpcomingMeeting
    } = useContext(MainContext)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: ''
    })

    const onChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const submitForm = (e) => {

        e.preventDefault()

        fetch(`${API_SERVER_URL}meeting/user-create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('user-token')
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    toast.success(json.message)
                    fetchUpcomingMeeting()
                } else {
                    toast.error('Something went wrong')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })

    }

    return (
        <form method='POST' onSubmit={submitForm} className='flex flex-col gap-4 py-10'>

            <h1 className='text-2xl font-semibold text-[#545454]'>Schedule Meeting</h1>

            <input
                value={formData.title}
                onChange={onChange}
                name='title'
                className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' placeholder='Title of meeting' required type="text" />

            <textarea
                value={formData.description}
                onChange={onChange}
                name='description'
                className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' placeholder='Description of meeting' rows={3} id="" required></textarea>

            <input
                value={formData.date}
                onChange={onChange}
                name='date'
                type="datetime-local" className='p-2 outline outline-2 outline-slate-300 rounded-lg focus:outline-slate-500 duration-300' required />

            <Button type='submit' className='bg-[#005AAA] text-white rounded-lg py-2 px-5'>
                Schedule
            </Button>

        </form>
    )
}

export default ScheduleMeeting