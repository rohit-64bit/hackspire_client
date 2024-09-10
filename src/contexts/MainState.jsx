import React from 'react'
import MainContext from './MainContext'

export const useSocket = () => {

}

export const usePeer = () => {

}

const MainState = ({ children }) => {
    return (
        <MainContext.Provider value={{}}>
            {children}
        </MainContext.Provider>
    )
}

export default MainState