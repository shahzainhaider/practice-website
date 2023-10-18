import React, {useState} from 'react'
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false)


  return (
   <>
   <header className=''>
    <div className='bg-emerald-500 p-4'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <h1 className='text-3xl lg:text-4xl font-bold'>Shah Tech</h1>
            </div>
            {
                !toggle?<AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-2xl md:hidden'/>:<AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-2xl md:hidden'/>
            }
            <ul className='hidden text-white gap-x-12 md:flex '>
                <a href="" className='hover:scale-125 text-lg font-medium duration-500' ><li>Home</li></a>
                <a href="" className='hover:scale-125 text-lg font-medium duration-500' ><li>Company</li></a>
                <a href="" className='hover:scale-125 text-lg font-medium duration-500' ><li>Resources</li></a>
                <a href="" className='hover:scale-125 text-lg font-medium duration-500' ><li>About</li></a>
                <a href="" className='hover:scale-125 text-lg font-medium duration-500' ><li>Contact</li></a>
            </ul>
            {/* responsive */}
            <ul className={` text-white p-5 flex flex-col space-y-4 w-full h-screen duration-300 fixed ${ toggle?'left-0': 'left-[-100%]'} top-[68px] bg-black md:hidden `}>
                <a href=""><li>Home</li></a>
                <a href=""><li>Company</li></a>
                <a href=""><li>Resources</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
            </ul>
        </div>
    </div>

   </header>
   </>
  )
}

export default Header