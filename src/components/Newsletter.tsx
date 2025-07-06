import React from 'react'

function Newsletter() {
  return (
    <div className='bg-black text-white px-4 py-8  md:grid grid-cols-2 md:p-12  '>
      <div>

      <h1 className='text-2xl font-bold'>Want tips and tricks to optimize your flow?</h1>
      <p className='font-bold my-2'>Sign up to our newsletter and stay up to date</p>
      </div>
      <form className='flex flex-col '>
        <div className="md:flex-row flex flex-col gap-2 my-2">

        <input type="email" placeholder='Enter email address' className='bg-white text-black py-3 px-4 rounded-xl w-full'/>
        <button className='bg-[#00df90] py-4 px-10 rounded-2xl text-black font-bold w-40 mx-auto' >Subscire</button>
        </div>
      <p className='mt-2'>we care about protection of your data. Read our <span className='text-[#00df90] underline'>Privacy Policy</span></p>
      </form>
    </div>
  )
}

export default Newsletter