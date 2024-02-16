import React, { useEffect } from 'react'
import layer1 from "../assets/layer1.png"
import layer2 from "../assets/layer2.png"
import layer3 from "../assets/layer3.png"
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md"
import profile from "../assets/profile.png"
import faq from "../assets/faq.png"
import AOS from "aos"
import "aos/dist/aos.css"
const BelowSlider = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='bg-[#f2f2f2] lg:mb-[50vh]'>
        <div className='flex flex-col '>
        <div className='mt-9 bg-[#f2f2f2] lg:h-[30vh] '>
            <div className='flex '>
                <div className='mt-2 md:w-[58.33%] ml-4 md:mt-8 md:mb-8 lg:ml-32' data-aos="fade-up">
                    <div className='w-[8.62963em] md:w-[100%] text-xl font-bold md:flex'>Interested in product specifications?</div>
                    <div className='w-[9.31818em] md:w-[100%] text-md text-[grey] font-thin mt-2'>Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</div>
                    <Link className='w-[9.31818em] md:w-[100%] flex mt-3 mb-4'><span className='text-[16px] font-bold'>Specifications</span> <MdArrowRightAlt className='ml-2 mt-1'></MdArrowRightAlt></Link>
                </div>
                <div>
                    <img src={layer1}  className='absolute  w-[15.625em] mt-[5.375em] -right-28 md:-mt-5 md:ml-4 md:w-[200px] md:h-[200px] md:right-5 lg:right-16 z-20' alt="" />
                    <img src={layer2} data-aos="zoom-in" className='absolute w-[15.625em] mt-[8.375em] -right-28 md:mt-6 md:ml-4 md:w-[200px] md:h-[200px] md:right-5 lg:right-16 z-10' alt="" />
                    <img src={layer3} data-aos="zoom-in" className='absolute w-[15.625em] mt-[11.375em] -right-28 md:mt-16 md:ml-4 md:w-[200px] md:h-[200px] md:right-5 lg:right-16 z-5' alt="" />
                </div>
            </div>
        </div>
            <div className='flex flex-col md:flex-row  w-[100vw] h-[10vh] md:h-[7vh] md:items-center bg-[#f2f2f2] pl-4 pt-1 lg:pl-32' style={{boxShadow:"2px 2px 5px black"}}>
                <div className='ml-4'>Got Questions ?</div>
                <div className='flex ml-4 mt-3 md:mt-0'>
                    <span className='flex mr-3'><img className='w-[25px] h-[25px] mr-2' src={profile} alt=''/><span>Ask Our Manager</span></span>
                    <span className='flex mr-3 md:ml-4'><img className='w-[20px] h-[25px] mr-2' src={faq} alt="" /><span>Read FAQ</span></span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BelowSlider