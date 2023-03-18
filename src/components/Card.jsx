import React from 'react'
import single from '../Assets/single.png';
import double from '../Assets/double.png';
import triple from '../Assets/triple.png';
const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '
                    >
                              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt/>
                              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                              <p className='text-center text-4xl font-bold'>$1423</p>
                              <div className='text-center font-medium'>
                                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                                        <p className='py-2 border-b mx-8'>1 Granted User</p > 
                                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                              </div>
                              <button className='bg-[#F2AA4CFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Start Trial</button> 
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4  my-4 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100'
                    >
                              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={triple} alt/>
                              <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                              <p className='text-center text-4xl font-bold'>$1423</p>
                              <div className='text-center font-medium'>
                                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                                        <p className='py-2 border-b mx-8'>1 Granted User</p > 
                                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                              </div>
                              <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#F2AA4CFF]'> Start Trial</button> 
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '
                    >
                              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt/>
                              <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                              <p className='text-center text-4xl font-bold'>$1423</p>
                              <div className='text-center font-medium'>
                                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                                        <p className='py-2 border-b mx-8'>1 Granted User</p > 
                                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                              </div>
                              <button className='bg-[#F2AA4CFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Start Trial</button> 
                    </div>

          </div>

    </div>
  )
}

export default Card