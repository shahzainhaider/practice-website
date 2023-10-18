import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-emerald-500 flex-col space-y-4 text-center font-bold py-40 md:py-52 md:space-y-7'>
        <h2 className='text-3xl'>Learn with us</h2>
        <h2 className='text-white text-5xl md:text-7xl'>Grow with us.</h2>
        <h2 className='text-white text-3xl sm:text-4xl md:text-5xl'>Learn
         <Typed
         className='ml-2'
            strings={['Ethical Hacking','Web Development','Digital Marketing' ]}
            typeSpeed={80}
            loop={true}
            backSpeed={80}
        />
        </h2>
        <button className='rounded-md bg-black text-white h-10 w-32'>Get start</button>

    </div>
  )
}

export default Banner