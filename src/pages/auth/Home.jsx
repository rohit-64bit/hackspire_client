import React from 'react';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <div className=''>
        <Header />
        <div className='p-10'>
          <div className='bg-[#005AAA] rounded-2xl h-[79vh] w-full'>

            <div className='flex flex-col h-full justify-center gap-5 text-white w-[50%] px-16 cursor-default'>
              <div className='text-5xl font-bold'>Seamless Video Conferencing for AICTE</div>
              <div className=' text-xl'>Engage and collaborate with ease. Connect, collaborate, and engage.</div>
              <div className='flex gap-2'>
                <div className='px-4 rounded-md cursor-pointer bg-[#F7941D] py-2'>yellow button</div>
                <div className='px-4 rounded-md cursor-pointer bg-white text-black py-2'>white button</div>
              </div>
              <div className='w-[80%] border border-white'></div>
              <div className='underline underline-offset-2 cursor-pointer'>Learn More</div>
            </div>

            <div></div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home