



import React, { useState } from 'react'
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";
function Navbar() {
    const [nav,setNav] = useState(false);

   const toggleNav = ()=>{
    setNav(p => !p)
   }
  return (
    <div className='flex justify-between text-center items-center bg-black py-6 px-12 '>
        <h1 className='text-4xl font-bold text-[#08df9a]'>ANALYTIX</h1>
        <ul className='uppercase text-lg font-medium gap-4 text-white hidden md:flex'>
            <li>Home</li>
            <li>Products</li>
            <li>Resources</li>
            <li>about us</li>
            <li>Contact</li>
        </ul>
        {!nav ? <AiOutlineMenu  onClick={toggleNav} size={20} className='text-white md:hidden cursor-pointer   '/>:<AiOutlineClose onClick={toggleNav} size={20} className='text-white md:hidden cursor-pointer '/>}
         <div className={nav ? 'py-7 h-screen text-left fixed left-0 top-0 ease-in-out duration-200 bg-black text-lg font-medium gap-4 text-white md:hidden w-[60%]' : 'fixed ease-in-out duration-200 left-[-100%] '}>
            <h1 className='text-4xl px-12 font-bold text-[#08df9a]'>ANALYTIX</h1>
            <ul className='uppercase p-4 '>
            <li className='border-b-gray-400 border-b text-2xl mt-8 cursor-pointer'>Home</li>
            <li className='border-b-gray-400 border-b text-2xl mt-4 cursor-pointer'>Products</li>
            <li className='border-b-gray-400 border-b text-2xl mt-4 cursor-pointer'>Resources</li>
            <li className='border-b-gray-400 border-b text-2xl mt-4 cursor-pointer'>about us</li>
            <li className='border-b-gray-400 border-b text-2xl mt-4 cursor-pointer'>Contact</li>
        </ul></div>
    </div> 
  )
}

export default Navbar