import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import "../components/Navbar.css"
import navlogo from "../assets/navlogo.png"
import logo from "../assets/logo.png"
const Navbar = () => {

  const [menu, setmenu] = useState(false)
  const [navbar, setnavbar] = useState(true)
  const change = () => {
    if (window.scrollY >= 80) {
      setnavbar(false)
    } else {
      setnavbar(true)
    }
  }
  window.addEventListener("scroll", change)
  return (
    <div >

      <div className={`${navbar ? "bg-transparent" : "bg-white"} fixed w-[100vw] h-[6vh] p-2 top-0 left-0  flex z-30 md:z-[45]`} style={{ borderBottom: "1px solid white" }}>
        <span className={` md:hidden text-2xl `} onClick={() => setmenu(!menu)}>
          {/* {
          !menu?:<ImCross className='hover:transform-gpu' style={{transform:"rotate(360deg)",transition:"ease-in 3s"}}/>
        } */}
          <RxHamburgerMenu className={`${navbar ? "text-white" : "text-black"}`} />
        </span>
        <img src={logo} className='h-[4vh] mb-2 ml-2 lg:ml-10 xl:ml-16' alt="" />
        <div className={`absolute top-2 right-2   lg:mr-10 xl:mr-16`}>
          <span className={`mr-4 text-[16px] pt-3  font-bold opacity-0 md:opacity-25 ${navbar ? "text-white" : "text-black"}`}>FAQ</span>
          <Link className={`bg-[#FFAA30] rounded-2xl text-[13px] font-bold p-2 w-[150px] text-center `}>Get a Quote</Link>
        </div>
      </div>
      <div className={`bg-[#2EBD71] absolute top-0 w-[100%] h-[100%] z-[45] md:h-8  ${menu ? "left-[-100%]" : "left-0"}  md:left-0 md:bg-transparent md:fixed md:top-0 overflow-y-scroll`} style={{ transition: "ease-in 0.2s" }}>
        <span className={`md:hidden text-2xl text-white ${!menu ? "menu" : ""} absolute left-2 top-2`} onClick={() => setmenu(!menu)}><RxCross2 className='hover:transform-gpu' style={{ transform: "rotate(360deg)", transition: "ease-in 3s" }} /></span>
        <ul className='mt-16 ml-7 text-[2.5em] font-bold  md:flex md:mt-3 md:ml-[25%] lg:ml-[30%]'>
          <li className={`text-[#7d7b7b] ${!menu ? "active1" : ""} md:text-sm md:${navbar ? "text-white" : "text-black"} md:ml-2 lg:ml-4`} ><Link>WhyRollpark </Link></li>
          <Link><li className={`text-[#7d7b7b] ${!menu ? "active2" : ""} md:text-sm md:${navbar ? "text-white" : "text-black"} md:ml-2 lg:ml-4`} >CaseStudies</li></Link>
          <Link><li className={`text-[#7d7b7b] ${!menu ? "active3" : ""} md:text-sm md:${navbar ? "text-white" : "text-black"} md:ml-2 lg:ml-4`} >Installation</li></Link>
          <Link><li className={`text-[#7d7b7b] ${!menu ? "active4" : ""} md:text-sm md:${navbar ? "text-white" : "text-black"} md:ml-2 lg:ml-4`} >Company</li></Link>
          <Link><li className={`text-[#7d7b7b] ${!menu ? "active5" : ""} md:text-sm md:${navbar ? "text-white" : "text-black"} md:ml-2 lg:ml-4`} >specs</li></Link>
        </ul>
        <div className=''>
          <img className={`absolute bottom-3 left-3 h-[60px] w-[70px] md:hidden ${!menu ? "active6" : ""}`} src={navlogo} alt="" />
          <div className={`absolute bottom-3 right-2 md:hidden ${!menu ? "active7" : ""}`}>
            <span className={`mr-4 text-[16px] mt-2 ${!menu ? "active8" : ""} md:hidden`}>FAQ</span>
            <Link className={`bg-[#FFAA30] rounded-2xl text-[13px] font-bold p-2 w-[150px] text-center ${!menu ? "active9" : ""} md:hidden`}>Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar