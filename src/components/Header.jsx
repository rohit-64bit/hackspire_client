import React from 'react';
import logo from '../assets/images/Group 1.png';

const Header = () => {
  return (
    <>
        <div className='bg-black text-white py-2.5 px-5 w-full flex justify-between items-center'>
            <div className='w-[50%]'>
                <img className='text-white w-[35%]' src={logo} alt="" />
            </div>

            <div className='flex items-center font-semibold'>
                <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>Home</div>
                <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>Join</div>
                <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>More</div>
                <div className='bg-[#F7941D] px-5 py-2.5 cursor-pointer border border-[#AC5E00]'>Support</div>
            </div>

        </div>
    </>
  )
}

export default Header