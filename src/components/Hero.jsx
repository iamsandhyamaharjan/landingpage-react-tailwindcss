import React from 'react'
import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
          <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                    <p className='text-[#F2AA4CFF] font-bold  md:text-1xl'>GROWING WITH DATA ANALYTICS</p>
                    <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 pb-6'>Grow with data.</h1>
                    <div className='flex justify-center items-center'>
                              <p className='md:text-5xl sm:text:4xl text-xl  mb-4 font-boldpy-4 '>Fast ,flexible financing for</p>
                              <ReactTyped className='md:text-5xl sm:text:4xl text-xl font-bolds md:pl-4 pl-2 mb-4' strings={['BTB' , 'BTC' , 'SASS']} typeSpeed={120} backSpped={140} loop/>
                    </div>
                    <p className="md:text-2xl text-xl font-bold text-gray-500">MMonitor your data analytics to increase revennue for BTB, BTC , SASS platforms.</p>
                    <button className='bg-[#F2AA4CFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started</button>
          </div>
    </div>
  )
}

export default Hero