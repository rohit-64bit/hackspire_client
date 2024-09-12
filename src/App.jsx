import React from 'react'
import Home from './pages/auth/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room from './pages/common/Room';
import RoomSetup from './pages/common/RoomSetup';
import PanelLayout from './layouts/PanelLayout';
import Dashboard from './pages/user/Dashboard';
import Chatbot from './components/Chatbot'; 
import MainState from './contexts/MainState';
import { SocketProvider } from './contexts/SocketProvider';
import MeetingDetails from './pages/user/MeetingDetails';
import UserProfile from './pages/user/UserProfile';
import ForgetPassword from './pages/auth/ForgetPassword';

const App = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={
          <Home />
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/room-setup' element={<RoomSetup />} />
        <Route path='/room/:roomID' element={<Room />} />

        <Route path='/dashboard' element={<PanelLayout Page={Dashboard} />} />

      </Routes>

      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        draggable
        pauseOnHover
        draggableDirection='right'
        position='top-right'
        limit={3}
      />
      <Chatbot />
      <MainState>
        <SocketProvider>
          <Routes>

            <Route path='/' element={
              <Home />
            } />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget-password' element={<ForgetPassword />} />

            <Route path='/room-setup' element={<RoomSetup />} />
            <Route path='/room/:roomID' element={<Room />} />

            <Route path='/user/dashboard' element={<PanelLayout Page={Dashboard} />} />
            <Route path='/user/meeting' element={<PanelLayout Page={MeetingDetails} />} />
            <Route path='/user/profile' element={<PanelLayout Page={UserProfile} />} />

          </Routes>

          <ToastContainer
            autoClose={3000}
            hideProgressBar={true}
            draggable
            pauseOnHover
            draggableDirection='right'
            position='top-right'
            limit={3}
          />
        </SocketProvider>
      </MainState>
    </>
  )
}

export default App