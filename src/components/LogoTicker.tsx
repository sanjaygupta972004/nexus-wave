import React from 'react'
import Image from 'next/image'
import Acma from "../assets/images/acme 1.png"
import Apex from "../assets/images/apex 1.png"
import Celestia from  "../assets/images/celestia 1.png"
import Echo from "../assets/images/echo 1.png"
import Pulsu from "../assets/images/pulse 1.png"
import Quantum from "../assets/images/quantum 1.png"

const images = [
  { src:Acma,
    alt :"acm"
  },
  { src:Apex,
    alt :"apex"
  },
  { src:Celestia,
    alt :"celestia"
  },
  { src:Echo,
    alt :"echo"
  },
  { src:Quantum,
    alt :"quantum"
  },
  {
    src : Pulsu,
    alt :"pulsu"
  }

]

export default function LogoTicker() {
  return (
     <div className=' bg-black'>
        <div className=' w-[380px] h-[256px] sm:w-[650px] sm:h-[158px] lg:w-full lg:h-[150px] flex items-center  flex-col gap-3 
        pt-5'>
           <h2 className='text-white font-medium text-center w-[145px] h-[36px] mx-[246px] sm:w-[299px] sm:h-[17px] text-[17px] flex-1 lg:text-xl'>
                Trusted by the world’s most <br /> innovative teams
                 </h2>
            <div className=' overflow-hidden mt-9 before:content-[""] after:content-[""] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20
               relative  after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0)] after:before:bg-[linear-gradient(to_left,#000,rgb(0,0,0)] ' >
            <div className='w-[340px] h-[112px] sm:w-[630px] sm:h-[72px] lg:w-[1025px] lg:h-[32px] flex gap-5 justify-center flex-row  flex-wrap mb-4  '>
               {
                  images.map((img)=>(
                    <Image src = {img.src}
                     alt= {`${img.alt}`} 
                     key = {`${img.alt}`}
                    className='w-[115px] h-[20px] flex-none'
                   />
                ))
               }
            </div>
            </div>
        </div>
     </div>
  )
}
