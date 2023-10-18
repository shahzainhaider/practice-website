import React from 'react'
import single from '../assets/single.png'

const Cards = () => {
  return (
    <div className='md:py-20'>
        <div className='flex flex-col items-center space-y-6 md:mx-auto md:max-w-7xl md:space-y-0 md:flex-row md:space-x-6'>
            <div className='shadow-xl flex flex-col items-center rounded-md h-[500px] w-[95%] sm:w-2/3 md:w-1/3 hover:scale-105 duration-500 hover:bg-gray-100'>
              <img src={single} alt="" className='w-20 -mt-8' />
            </div>
            <div className='shadow-xl rounded-md h-[500px] w-[95%] sm:w-2/3 md:w-1/3 hover:scale-105 duration-500 hover:bg-gray-100'></div>
            <div className='shadow-xl rounded-md h-[500px] w-[95%] sm:w-2/3 md:w-1/3 hover:scale-105 duration-500 hover:bg-gray-100'></div>
        </div>
    </div>
  )
}

export default Cards