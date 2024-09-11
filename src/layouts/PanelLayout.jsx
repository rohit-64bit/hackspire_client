import React from 'react'
import SideBar from './SideBar'
import Header from './Header'

const PanelLayout = ({ Page }) => {
    return (
        <div className='flex max-w-screen h-screen'>

            <SideBar />

            <div className='flex flex-col w-full h-full'>

                <Header />

                <Page />

            </div>

        </div>
    )
}

export default PanelLayout