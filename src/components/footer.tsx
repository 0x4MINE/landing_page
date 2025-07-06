import React from 'react'
import { FaYoutubeSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-black text-white p-8 md:grid grid-cols-3 '>
            <div>

                <h1 className='text-[#00df90] font-bold text-2xl mb-4'>ANALYTIX</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi voluptas ipsa, exercitationem incidunt dolores.</p>
                <div className='flex gap-8 my-8'>
                    <FaFacebookSquare size={30} className='cursor-pointer' />
                    <FaGithubSquare size={30} className='cursor-pointer' />
                    <FaYoutubeSquare size={30} className='cursor-pointer' />
                    <FaTwitterSquare size={30} className='cursor-pointer' />
                    <FaInstagramSquare size={30} className='cursor-pointer' />
                </div>
            </div>

            <div className="flex justify-between col-span-2 my-auto">
                <ul className='flex flex-col gap-2'>
                    <li>Solutions</li>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Insights</li>
                    <li>Commerce</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li>Support</li>
                    <li>Pricing</li>
                    <li>Documentaion</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Job</li>
                    <li>Carpet</li>
                </ul>
                <ul className='flex flex-col gap-2'>
                    <li>Legal</li>
                    <li>Claim</li>
                    <li>Marketing</li>
                    <li>Insights</li>
                    <li>Commerce</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer