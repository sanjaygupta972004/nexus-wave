import LogoImage from "../assets/images/logosaas.png"
import Menubar from "../assets/icons/Icons(1).svg"
import Image from "next/image"
import Logo from "../assets/images/Logo.png"



export default function Navbar() {
  return (
    <div className=" bg-black">
    <div className=" px-5" >
        <div className=" flex items-center justify-between py-4 ">
          <div className=" relative w-10 h-10">
             <div className=" absolute w-full top-0 bottom-0 bg-gradient-to-r from-sky-500 to-indigo-500 border rounded-md ">
                 <Image src = {LogoImage} alt ="sass-logo" className="w-12 h-10 absolute top-0 bottom-0" />
             </div>
           </div>
          <div className=" border border-white border-opacity-35 h-10 w-10  items-center justify-center inline-flex rounded-lg sm:hidden">
           <Menubar className = "text-white "/>
            </div>
            <nav className="gap-5 hidden sm:flex ">
              <a className =" text-white text-opacity-55 hover:text-opacity-90 hover:underline underline-offset-6"href="#">Home</a>
              <a className =" text-white text-opacity-55 hover:text-opacity-90 hover:underline underline-offset-6"href="#">About</a>
              <a className =" text-white text-opacity-55 hover:text-opacity-90 hover:underline underline-offset-6"href="#">Features</a>
              <a className =" text-white text-opacity-55 hover:text-opacity-90 hover:underline underline-offset-6"href="#">Help</a>
              <a className =" text-white text-opacity-55 hover:text-opacity-90 hover:underline underline-offset-6"href="#">Customers</a>
              <button className=" bg-white text-gray-700 rounded-md p-1 hover:bg-opacity-90  ">Get for free</button>
            </nav>
        </div>
      </div>
      </div>
  )
}
