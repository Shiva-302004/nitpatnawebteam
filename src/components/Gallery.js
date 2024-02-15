import React, { useEffect } from 'react'
import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import colon from "../assets/colon.png"
import men from "../assets/men.png"
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import AOS from "aos"
import "aos/dist/aos.css"
const Gallery = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    })
    return (
        <div className='mt-3 h-auto'>
            <div className='flex flex-col m-2 md:flex-row  md:m-4'>
                <img className='mt-2 w-[96vw] md:w-[47vw]  ' src={gallery1} alt="" data-aos="fade-right" data-aos-duration="2100"/>
                <div>
                <img className='mt-2 w-[96vw] md:w-[47vw] md:ml-3  ' src={gallery2} alt="" data-aos="fade-right" data-aos-duration="2500"/>
                <Link className='bg-[#FFAA30] rounded-2xl text-[13px] font-bold p-2 w-[160px] sm:w-[140px] text-center absolute right-12 -mt-12 invisible  md:visible flex'><span>see case studies</span><MdArrowRightAlt className=' ml-1 mt-1 '></MdArrowRightAlt></Link>
                </div>
            </div>
            <div className='flex flex-col m-2 md:flex-row md:m-4'>
                <img className='mt-2 md:w-[47vw] w-[96vw] ' src={gallery3} alt="" data-aos="fade-right" data-aos-duration="2300"/>
                <div className='flex flex-col md:ml-10 justify-center md:m-20 m-5 md:w-[350px] lg:ml-[10vw] 'data-aos="fade-up" data-aos-duration="2300">
                    <img className='w-[30px]' src={colon} alt="" />
                    <h1 className='text-[1.3rem] font-bold md:text-[20px]'>Rollpark has saved Ford Motor Company several million dollars<span className='text-md sm:text-xl text-[grey] font-normal md:text-[16px] mr-2'> by having a single site developed in a shorter time in lieu of the traditional multiple paved facilities we have utilized in the past</span></h1>
                    <div className='flex sm:w-[100vw] md:w-[350px]'data-aos="fade-right" data-aos-duration="2500">
                        <img src={men} className='w-[40px] h-[40px] rounded-full mt-2' alt="" />
                        <div className='ml-2'>
                            <h5 className='text-[17px] font-bold mt-1'>Dean Anos</h5>
                            <span className='text-[14px] font-thin text-[grey]  flex flex-col'><span>Senior Real Estate Manager</span><span>Ford Motor Company</span> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery