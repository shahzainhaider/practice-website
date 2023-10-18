import React from 'react'

const Contact = () => {
  return (
    <div className='bg-emerald-500'>
        <div className='py-32 flex flex-col justify-between items-center space-y-10 mx-auto md:space-y-0 md:space-x-4 md:flex-row md:mx-6 md:max-w-7xl'>
            <div className="text-white text-center">
            <h2 className='text-2xl font-bold text-white md:text-3xl'>Want to learn latest IT skills?</h2>
            <p>signup to our newsletter to stay up to date</p>
            </div>
            <div className="flex flex-col space-y-4">
                <div className='flex flex-col space-y-6 items-center md:space-y-0 md:flex-row md:space-x-2'>
                <input className='p-2 rounded-md' type="text" placeholder='Email' />
                <button className='rounded-md bg-black text-white h-10 w-32 '>Get start</button>
                </div>
                <p className='text-center text-white md:text-left'>We care about the protection of your data.<br/> Read our PRIVACY POLICY</p>

            </div>

        </div>
    </div>
  )
}

export default Contact