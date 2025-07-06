import React from 'react'
import Single from "../assets/single.png"
import Duo from "../assets/double.png"
import Group from "../assets/triple.png"
import Card from './Card'
function Cards() {
  return (
    <div className='m-16 flex flex-col md:grid grid-cols-3  '>
      <Card img={Single} price={29} plan="Single User" features={["500 GB Storage","1 Granted User","Send up to 2 GB"]}/>
      <Card isBest img={Duo} price={29} plan="Duo Promo" features={["1 TB Storage","2 Granted User","Send up to 10 GB"]}/>
      <Card img={Group} price={29} plan="Group Account" features={["10 TB Storage","Unlimited Granted User","Send up to 20 GB"]}/>
    </div>
  )
}

export default Cards