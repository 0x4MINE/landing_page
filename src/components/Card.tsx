import React from 'react'

type CartProps = {
    img:string,
    price:number,
    plan:string,
    features:string[],
    isBest?:boolean
}


function Card({img,price,plan,features,isBest}:CartProps) {
  return (
    <div className={"md:mx-4 my-16 px-16 py-8 shadow-2xl rounded-xl flex gap-2 flex-col text-center justify-center items-center  ease-in-out duration-300 " + (isBest ? " bg-gray-100 scale-105 hover:scale-110" : "hover:scale-105 bg-white min-h-[100px]")}>
        <img className='w-22 mt-[-5rem]' src={img} alt="" />
        <h2 className='text-xl font-bold mb-2' >{plan}</h2>
        <h1 className='font-bold text-4xl'>${price}</h1>
        <ul className='my-2'>
        {features.map((v,i) => {
            return <li key={i} className='py-2 border-b border-b-gray-500'>{features[i]}</li>
        })}
        </ul>
        <button className='bg-[#00df90] py-4 px-10 rounded-2xl text-black font-bold w-40 mx-auto' >Start Trial</button>
      </div>
  )
}

export default Card