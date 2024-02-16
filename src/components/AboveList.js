import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import labour from "../assets/labour.png"
import AOS from "aos"
import "aos/dist/aos.css"
const AboveList = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='bg-white'>
            <hr className='w-[100vw]' />
            <div className='flex '>
                <div className='mt-2 md:w-[58.33%] ml-4 md:mt-8 md:mb-8 lg:ml-32' data-aos="fade-up">
                    <div className='w-[8.62963em] md:w-[100%] text-xl font-bold md:flex'><span>What to expect?</span> <span className='mr-1 md:text-[grey]'>A turnkey solution</span></div>
                    <div className='w-[9.31818em] md:w-[100%] text-md text-[grey] font-thin mt-2'>From design to installation, Rollpark can handle every aspect of the job: site procurement, civil engineering, geotechnical engineering, design, site preparation, and installation.</div>
                    <Link className='w-[9.31818em] md:w-[100%] flex mt-3 mb-4 '><span className='text-[16px] font-bold'>Installation process</span> <MdArrowRightAlt className='ml-2 mt-1 hover:ml-4'></MdArrowRightAlt></Link>
                </div>
                <div>
                    <img src={labour} className='absolute w-[15.625em] mt-[8.375em] -right-32 md:mt-6 md:ml-4 md:w-[200px] md:h-[200px] md:right-0 lg:right-16' alt="" />
                </div>
            </div>

            <hr className='w-[100vw]' />
        </div>
    )
}

export default AboveList