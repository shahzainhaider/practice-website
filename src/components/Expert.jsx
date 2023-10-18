import React from 'react'
import laptop from '../assets/laptop.jpg'

const Expert = () => {
  return (
    <div className='md:max-w-7xl mx-auto flex flex-col md:space-x-20 my-10 md:flex-row'>
        <div className='md:w-1/3'>
            <img src={laptop} alt="" />
        </div>
        <div className='text-center flex flex-col p-2 items-center justify-center space-y-2 mt-8 md:mt-0  md:w-2/3 md:items-start md:text-left'>
            <h3 className='text-xl text-emerald-700 font-bold'>LEARN FROM EXPERTS</h3>
            <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro perspiciatis nisi sint adipisci fugiat nihil. Officia nam ea odit ad? Ex illo eaque corporis voluptate, deerunt animi eligendi. Molestias quam delectus nihil deserunt. Maiores voluptatum a totam ut fugit ullam aut adipisci, iure quidem ea velit amet temporibus voluptatem.</p>
            <button className='rounded-md bg-black text-white h-10 w-32 '>Get start</button>
        </div>
    </div>
  )
}

export default Expert