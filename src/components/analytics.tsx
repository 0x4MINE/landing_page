import React from 'react'

import laptop from "../assets/laptop.jpg"


function Analytics() {
  return (
    <div className='p-4 md:grid grid-cols-2'>
        <img src={laptop} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-[#00df9a]'>Data analytics dashboard</p>
            <h1 className='text-2xl font-bold py-2'>Manage Data Analytics Centrelly</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iste corporis dolorum qui labore natus illo rem quibusdam soluta? Ipsa corporis fugiat temporibus ea quisquam repudiandae accusantium? Eveniet, esse magni.</p>
            <button className='bg-black  py-4 px-10 rounded-2xl text-[#00df9a] font-bold mx-auto my-6' >Get Started !</button>
            </div>
    </div>
  )
}

export default Analytics