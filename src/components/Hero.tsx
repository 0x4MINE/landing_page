import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='h-screen bg-black text-white text-center flex justify-center flex-col items-center gap-2'>
        <p className='uppercase font-bold md:text-lg text-[#00df90]'>Growing with data analytics</p>
        <h1 className='md:text-6xl text-5xl font-bold py-2'>Grow with data.</h1>
        <div className='flex md:text-5xl text-2xl font-bold'>
        <h2>Fast,flexible financing for </h2>
        <ReactTyped className='pl-2 md:pl-4' loop strings={["BTC.","USDT.","DZD.","XTC."]} typeSpeed={40} backSpeed={50}/>
        </div>
        <p className='font-bold text-gray-500 text-lg py-2'>Monitor your data analytics to increase revenue for BTC,USDT,DZD & XTC platforms.</p>
        <button className='bg-[#00df90] py-4 px-10 rounded-2xl text-black font-bold' >Get Started !</button>
    </div>
  )
}

export default Hero