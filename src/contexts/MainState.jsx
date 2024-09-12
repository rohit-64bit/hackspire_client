import React, { useState } from 'react'
import MainContext from './MainContext'
import UpcomingMeeting from './../components/UpcomingMeeting';
import { API_SERVER_URL } from '../services/Helpers';

const MainState = ({ children }) => {

    const [userProfile, setUserProfile] = useState({})

    const [upcomingMeeting, setUpcomingMeeting] = useState([])

    const fetchUpcomingMeeting = () => {

        fetch(`${API_SERVER_URL}meeting/user-get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('user-token')
            }
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    setUpcomingMeeting(json.data)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <MainContext.Provider value={{
            userProfile,
            setUserProfile,
            upcomingMeeting,
            fetchUpcomingMeeting
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState