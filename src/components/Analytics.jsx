import React from 'react'
import laptop from '../Assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img className='w-[500px] mx-auto my-4' src={laptop} alt="imageof laptop"/>
<div className='flex flex-col justify-center'>
          <p className='text-[#F2AA4CFF] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum alias placeat magnam. Odit at numquam doloremque quasi? Sit natus quasi quam doloribus eaque dolorum obcaecati ipsam rerum voluptatem ex.</p>
          <button className='text-[#F2AA4CFF] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'> Get Started</button>
</div>
</div>


    </div>
  )
}

export default Analytics