import React, { useRef, useState } from 'react'
import hero from "../assets/hero.mp4"
import { Typewriter } from 'react-simple-typewriter'
import "../components/Navbar.css"
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosPause } from "react-icons/io";
import Stats from './Stats';
const Hero = () => {
    const videoref=useRef()
    const [click,setclick]=useState(false)
    const handleclick=()=>{
        setclick(!click)
        videoref.current.play()
    }
    const handleclick1=()=>{
        setclick(!click)
        videoref.current.pause()
    }
    return (
        <div className=''>
            <video className={`w-[100vw] absolute  bg-cover  object-cover  ${click?" top-0 left-0 h-[100vh] z-50 ":"z-0 h-[90vh] "} hii `} ref={videoref} poster="https://rollpark.us/wp-content/uploads/2018/10/hero-image.jpg" autoPlay loop   >
                <source src={hero} type="video/mp4" />
            </video>

            <div className={`absolute mt-96 z-0 flex flex-col ml-4 mb-16 md:${click?"hidden":"z-40 visible"} md:ml-16 lg:ml-32`}>
                <div className={`bg-[#2EBD71] w-[40px] h-[40px] rounded-full mb-8 `} onClick={handleclick} ><FaPlay  className='text-white ml-2 mt-2' /></div>
                <h2 className='text-white text-3xl font-bold lg:text-5xl' style={{textTransform:"uppercase"}}>Commercial Parking </h2>
                <p className='text-2xl font-semibold text-white mt-3 lg:text-3xl font-[Quintessential] mb-2'>for <span className='animate'><Typewriter words={["municipalities","universities","automanufacturers","special events","airports","municipalities"]} loop={"infinite"} typeSpeed={0} deleteSpeed={10}></Typewriter></span></p>
                <p className='text-white text-sm font-medium flex mt-3'>Not Asphalt. Not Gravel.<span className='ml-1 text-[#2EBD71] flex '><p>GeoTextile.</p><span className=' text-[12px] text-black bg-[#2EBD71] rounded-full w-[20px] h-[20px] ml-2 mt-[0.5px]'><MdOutlineQuestionMark className='ml-1 mt-1'></MdOutlineQuestionMark></span></span></p>
            </div>
            <div className={`bg-[#2EBD71] w-[40px] h-[40px] rounded-full mb-3 absolute bottom-4 z-40 ml-6 md:z-50 ${click?"visible":"hidden"}`} onClick={handleclick1} ><IoIosPause  className='text-white ml-2 mt-2' /></div>
            <div className={`bg-[#2EBD71] w-[40px] h-[40px] rounded-full mb-3 absolute top-4 z-40 right-6 md:z-50 ${click?"visible":"hidden"}`} onClick={handleclick} ><RxCross2  className='text-white ml-2 mt-2' /></div>
            <div className='absolute mt-[90vh]'>
                <Stats></Stats>
            </div>
        </div>
    )
}

export default Hero