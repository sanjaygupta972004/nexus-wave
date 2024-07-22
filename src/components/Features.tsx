import React from 'react'
import Image from 'next/image'
import Frame from "../assets/images/Frame 21.png"

export default function Features() {
  return (
      <div className=' bg-black  text-white w-[412px] h-[1298px] sm:w-[809px] lg:w-full lg:h-[732px] lg:pt-7' >
        <div className=' text-white w-[410px] h-[1155px] sm:w-[703px] sm:h-[1100px] lg:h-[502px] lg:w-full py-[50px] px-[10px] flex flex-col items-center justify-center lg:Pt-7'>
             <div className='w-[360px] h-[235px] px-[15px] lg:px-[225px] lg:h-[275px] lg:w-fit flex flex-col items-center gap-2 '> 
               <h2 className=' w-full h-[62px] text-[25px] font-semibold pt-4 text-center md:text-3xl lg:text-4xl '>
                  Everything you need
               </h2>
               <p className=' h-[132px] px-[1.5px]  text-[16px] font-medium md:text-[18px] md:h-[150px] lg:text-[20px] '>
                 Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly
               </p>
             </div> 
             <div className=' w-[365px] h-[810px] px-[15px] flex flex-wrap justify-center lg:gap-12 lg:w-full lg:h-[265px] relative lg:bottom-7 '>
                  <div className=' w-[328px] h-[225px] px-[35px] flex items-center flex-col gap-5  shadow-xl bg-gray-700 rounded-lg'>
                    <div className=' mt-[3px] pt-2'>
                      <Image src = {Frame} alt = "frame" />
                    </div>
                   <div className=' flex flex-col justify-center w-[319px] h-[100px] gap-1'>
                     <h2 className=' text-center text-[21px]'> Integration ecosystem </h2>
                     <p className=  " text-[15px] pl-3 w-[319px] h-[69px] ">  Enhance your productivity by connecting with your favorite tools,keeping all your essentials in one place.</p>
                    </div>
                  </div>
                  <div className=' w-[328px] h-[225px] px-[35px] flex items-center flex-col gap-5  shadow-xl bg-gray-800 rounded-lg'>
                    <div className=' mt-[3px] pt-2'>
                      <Image src = {Frame} alt = "frame" />
                    </div>
                   <div className=' flex flex-col justify-center w-[319px] h-[100px] gap-1'>
                     <h2 className=' text-center text-[21px]'> Secure data encryption </h2>
                     <p className=  " text-[15px] pl-3 w-[319px] h-[69px] "> With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>
                    </div>
                  </div>
                  <div className=' w-[328px] h-[225px] px-[35px] flex items-center flex-col gap-5  shadow-xl bg-gray-900 rounded-lg'>
                    <div className=' mt-[3px] pt-2'>
                      <Image src = {Frame} alt = "frame" />
                    </div>
                   <div className=' flex flex-col justify-center w-[319px] h-[100px] gap-1'>
                     <h2 className=' text-center text-[21px]'> Goal setting and tracking</h2>
                     <p className=  " text-[15px] pl-3 w-[319px] h-[69px] ">  Enhance your productivity by connecting with your favorite tools,keeping all your essentials in one place.</p>
                    </div>
                  </div>
             </div>
        </div>
      </div>
  )
}
