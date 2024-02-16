import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'
import "../components/Navbar.css"
import navlogo from "../assets/navlogo.png"
import logo from "../assets/logo.png"
import { String4, string3 ,string5} from './Arrays';
const Navbar = () => {

  const [menu, setmenu] = useState(false)
  const [navbar, setnavbar] = useState(true)
  const [quote, setquote] = useState(true)
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
      <div className={`${navbar ? "bg-transparent" : "bg-white"} fixed w-[100vw] h-[6vh] p-2 top-0 left-0  flex z-30 md:z-[55]`} style={{ borderBottom: "1px solid white" }}>
        <span className={` md:hidden text-2xl `} onClick={() => setmenu(!menu)}>
          <RxHamburgerMenu className={`${navbar ? "text-white" : "text-black"}`} />
        </span>
        <img src={logo} className='h-[4vh] mb-2 ml-2 lg:ml-10 xl:ml-16' alt="" />
        <div className={`absolute top-2 right-2   lg:mr-10 xl:mr-16`}>
          <span className={`mr-4 text-[16px] pt-3  font-bold opacity-0 md:opacity-25 ${navbar ? "text-white" : "text-black"}`}>FAQ</span>
          <Link className={` ${navbar ? "bg-[#2EBD71]" : "bg-[#FFAA30]"} hover:bg-[rgb(101,218,155)] rounded-2xl text-[13px] font-bold p-2 w-[150px] text-center `} onClick={() => setquote(!quote)}><span>Get a Quote</span></Link>
        </div>
      </div>
      <div className={`bg-[#2EBD71] absolute top-0 w-[100%] h-[100%] z-[55] md:h-8  ${menu ? "left-[-100%]" : "left-0"}  md:left-0 md:bg-transparent md:fixed md:top-0 overflow-y-scroll`} style={{ transition: "ease-in 0.2s" }}>
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
      {
        !quote ? <Quote quote={quote} setquote={setquote} /> : <></>
      }
    </div>
  )
}
const Quote = ({ quote, setquote }) => {
  const [click, setclick] = useState(0)
  const [click1, setclick1] = useState(0)
  return (
    <>
      <div className='fixed top-0 w-[100vw] h-[100vh] md:w-[80vw] md:top-2 md:left-[10%] bg-white z-[55] overflow-scroll overflow-x-hidden'>
        <span className={` text-2xl text-black  absolute z-60 right-2 top-2 bg-[grey] rounded-full p-2`} ><RxCross2 className='hover:transform-gpu' style={{ transform: "rotate(360deg)", transition: "ease-in 3s" }} onClick={() => setquote(!quote)}/></span>
        <div className='flex flex-col justify-center items-center mt-12'>
          <span className='text-3xl font-bold'>REQUEST A QUOTE</span>
          <div className='text-lg font-thin text-center w-[80vw] mt-1 text-[grey]'>Share your details to get a project estimation and free consulation</div>
          <div className='border border-[grey] h-[1px] w-[100vw] opacity-25 md:w-[80vw]'></div>
          <div className=' flex w-[100vw] justify-evenly p-3'>
            <div className='mt-2 flex-col w-[50vw]'>
              <h1 className='text-[14px] font-bold text-center'>Lots Current Surface</h1>
              <div className='flex mt-4 justify-between '>
                <div className='flex ml-3 md:ml-28 lg:ml-64'>
                  {
                    string3.map((item, i) => {
                      return (
                        <div key={i} className='flex flex-col'>
                          <img src={item.img} className={`w-[80px] h-[75px]  ${click === i ? " border border-spacing-4 border-spacing-y-6 border-orange-400 rounded-full" : ""}`} alt="" onClick={() => setclick(i)} />
                          <span className={` text-[12px]  mt-2 text-center font-bold ${click === i ? " text-black " : "text-[grey]"}`} >{item.name}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='border border-[grey] h-[150px] -mt-4 w-[1px] ml-4 opacity-50'></div>
              </div>
            </div>
            <div className='flex flex-col mt-2 w-[50vw] ml-3'>
              <h1 className='text-[14px] font-bold text-center flex'>Lot’s area size <span className='text-[grey] ml-1'>(approx)</span></h1>
              <input type="text" value={85} className='w-[160px] md:w-[200px] text-5xl border-b-2 px-4 mt-4 text-center' />
              <div className='flex '>
                {
                  String4.map((item, i) => {
                    return (
                      <div key={i}>
                        <span className={`ml-2  text-[16px] font-bold ${click1 === i ? "text-black" : "text-[grey]"}`} onClick={() => setclick1(i)}>{item}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='border border-[grey] h-[1px] w-[100vw] opacity-25 md:w-[80vw]'></div>
          <div className='flex flex-col justify-center it'>
            <div className='flex flex-col md:flex-row '>
              <input type="text" placeholder='First name' className='w-[90vw] md:w-[30vw] text-lg border-b-2 px-4 mt-4 ' />
              <input type="text" placeholder='Last name' className='w-[90vw] md:w-[30vw] text-lg border-b-2 px-4 mt-4 md:ml-4 ' />
            </div>
            <input type="text" placeholder='Company' className='w-[90vw] md:w-[70vw] text-lg border-b-2 px-4 mt-4 ' />
            <input type="text" placeholder='Email' className='w-[90vw] md:w-[70vw] text-lg border-b-2 px-4 mt-4 ' />
            <input type="text" placeholder='Lot Location' className='w-[90vw] md:w-[70vw] text-lg border-b-2 px-4 mt-4 ' />
            <input type="text" placeholder='phone Number' className='w-[90vw] md:w-[70vw] text-lg border-b-2 px-4 mt-4 ' />
            <label htmlFor="use" className='mt-2 text-md'> Use </label>
            <select name="Use" id="use" className='w-[90vw] md:w-[40vw] text-lg border-b-2 px-4 pt-1 focus:text-[grey]  ' >
              {
                string5.map((item,i)=>{
                  return(
                    <option key={i} value={item} className='text-[grey]'>
                      {item}
                    </option>
                  )
                })
              }
            </select>
            <label htmlFor="comment" className='text-md mt-2 '>Additional Comments</label>
            <textarea className='w-[90vw] md:w-[70vw] text-lg border-b-2 px-4 mt-4 h-[200px]'></textarea>
            <div className='flex items-center justify-center'>

            <Link className='bg-[#FFAA30] rounded-2xl text-[13px] font-bold p-2 w-[150px] text-center mt-2  mb-2'> Submit</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar