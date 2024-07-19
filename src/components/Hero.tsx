import React from 'react'
import Arrow from "../assets/icons/Icons.svg"
import Cursor from "../assets/images/Cursor.png"
import Message from "../assets/images/Message.png"
import Image from 'next/image'
 
export default function Hero() {
  return (
    <div className=' bg-[linear-gradient(to_bottom,#000000,#200D42,#4F21A1,#A46EDB)] '>
        <div className=' text-white flex gap-8 items-center justify-center flex-col px-4 sm:px-1 pt-16 w-99 h-154 sm:w-210 sm:h-182 lg:w-[1200px] lg:h-[731px] lg:mx-[230px] lg:py-[60px]'>
           <a href="" className=' inline-flex border border-gray-700 border-opacity-65 p-1 rounded-md'> 
                <span className=' pr-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]'>
                   version 2.0 is here 
                    </span>
                  <span className=' inline-flex items-center gap-1'> 
                       <span>
                           Read More
                         </span>
                       <Arrow/>
                   </span>
           </a>
           <div className='flex items-center justify-center w-full mx-auto lg:ml-8 '>
             <div className='hidden sm:flex  '>
               <Image src = {Cursor} alt = "cursor" className=' rotate-90'  />
             </div>
             <h1 className='text-center text-5xl font-semibold sm:text-6xl'>
                 One Task  <br />at a Time
             </h1>
               <div className='hidden sm:inline-block    '> 
                <Image src = {Message} alt = "cursor"  className=' pr-2'/>
              </div>
           </div>
           <p className=' w-[335px] h-[155px] font-medium text-center text-xl  '>
              Celebrate the joy of accomplishment with an app designed to track your progress,
               motivate your efforts, and celebrate your successes.
           </p>
           <button className=" bg-white text-gray-700 rounded-lg p-[1px] hover:bg-opacity-90 w-[130px] h-14 mb-12 text-[20px]">
                Get for free
           </button>
        </div>
    </div>
  )
}
