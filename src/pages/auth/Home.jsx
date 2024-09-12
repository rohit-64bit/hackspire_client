import React from 'react';
import Header from '../../components/Header';
import home from '../../assets/images/home.svg'


const Home = () => {
  return (
    <>
      <div className=''>
        <Header />
        <div className='p-6 md:p-10'>
          <div className='bg-[#005AAA] rounded-2xl h-[80vh] md:h-[75vh] xl:h-[79vh] flex w-full'>

            <div className='flex flex-col h-full justify-center gap-5 text-white lg:w-[50%] px-8 md:px-16 cursor-default'>
              <div className='text-3xl xl:text-5xl font-bold'>Seamless Video Conferencing for AICTE</div>
              <div className='xl:text-xl'>Engage and collaborate with ease. Connect, collaborate, and engage.</div>
              <div className='flex gap-2'>
                <div className='px-4 rounded-md cursor-pointer bg-[#F7941D] py-2'>Sign In</div>
                <div className='px-4 rounded-md cursor-pointer bg-white text-black py-2'>Register</div>
              </div>
              <div className='w-[80%] border border-white'></div>
              <div className='underline underline-offset-2 cursor-pointer'>Learn More</div>
            </div>

            <div className='lg:block hidden w-[50%]'>
              <div className='w-full pt-16 xl:pt-12 flex justify-center items-center'>
                <img className='w-[80%] xl:w-[70%]' src={home} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home