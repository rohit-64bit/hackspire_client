import React, { useState } from 'react'
import MainContext from './MainContext'

const MainState = ({ children }) => {

    const [userProfile, setUserProfile] = useState({})

    return (
        <MainContext.Provider value={{
            userProfile,
            setUserProfile
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState