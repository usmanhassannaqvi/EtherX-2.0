import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className="  w-[80%] m-auto  overflow-hidden">    
        <div className='flex h-56'>
            <div className='flex flex-col w-[70%] items-start justify-center gap-4'>
                <div>
                <h1 className='text-xl font-bold text-pink-600'>EtherX.</h1>
                <h1>Get the latest updates</h1>
                </div>
                <div>
                    <input placeholder='Your Email' type="text" className='py-1 bg-black opacity-90 px-2 outline-none'/>
                    <button className="hover:opacity-80 px-2 py-1 rounded bg-pink-600">Email me</button>
                </div>
            </div>
            <div className='flex flex-col w-[30%] py-6 gap-8'>
                <div className='text-xl font-bold'>EtherX.</div>
                <div className='flex flex-col gap-1 '>
                    <Link to="/">Explore</Link>
                    <Link to="/">How it Works</Link>
                    <Link to="/">Contact US</Link>

                </div>
            </div>
            <div className='flex flex-col w-[40%] py-6 gap-8'>
            <div className='text-xl font-bold'>Support</div>
                <div className='flex flex-col gap-1 '>
                    <Link to="/">Help Center</Link>
                    <Link to="/">Term of Services</Link>
                    <Link to="/">Legal</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>            
            </div>
        </div>
        <div className=' flex justify-between'>
            <div>EtherX.com, All Rights Reserved. </div>
            <div>
                logos
            </div>

        </div>
    </div>
  )
}
