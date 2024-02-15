import React, { useEffect } from 'react'
import assets1 from "../assets/assets1.png"
import assets2 from "../assets/assets2.png"
import AOS from "aos"
import "aos/dist/aos.css"
const Designed = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
})
  return (
    <div className='mt-10 md:flex md:overflow-x-hidden h-[70vh]  md:h-[40vh] '>
        <h1 className='font-bold text-2xl ml-3 md:ml-6 lg:text-xl lg:ml-[10vw]'data-aos="fade-up">Designed for You.</h1>
        <div className='relative mt-4 md:mt-2' data-aos="fade-up">
            <ul className='list-disc ml-9 text-lg font-thin md:text-md md:list-[dash] md:ml-[5vw] lg:text-lg lg-ml-[10vw] xl:text-xl' data-aos-duration="2300">
                <li >Roll it out and instantly park   </li>
                <li>Re-use it on multiple sites </li>
                <li>Event Parking, Overflow, Vehicle Storage </li>
                <li>Daily, temporary use <span className='text-[#2EBD71] ml-1'>1-3 years</span> </li>
                <li>Daily, long term use <span className='text-[#2EBD71] ml-1'>4-7 years</span></li>
            </ul>
        </div>
        <div className='absolute mt-5  md:-right-32 lg:right-[8vw] lg:mt-10 ' data-aos="fade-down" data-aos-duration="2600">
        <div className='text-center'><img className='w-[80vw] text-center ml-[10vw] md:w-[40vw] lg:w-[25vw]' src={assets1} alt="" /></div>
        <div className='text-center'><img className=' opacity-[0.1] w-[80vw] text-center ml-[10vw] absolute -z-10 top-0 mt-16 lg:mt-16 md:w-[40vw] lg:w-[25vw]' src={assets2} alt="" /></div>
        </div>
    </div>
  )
}

export default Designed