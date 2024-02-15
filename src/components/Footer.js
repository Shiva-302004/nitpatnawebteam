import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import footerlogo from "../assets/footerlogo.png"
const Footer = () => {
    return (
        <div className=' '>
            <section className='bg-[#2EBD71] flex  pl-[2.1875em] pt-[1.25em] pr-[1.875em] pb-[1.25em] justify-center items-center  '>
                <div className='flex flex-col justify-center items-center w-[70vw] md:w-auto'>
                    <h1 className='text-xl md:text-3xl font-semibold mb-2'>Request a proposal</h1>
                    <h4 className='text-md opacity-60 font-thin'>Leave your details for our manager to contact you.</h4>
                    <h4 className='text-md opacity-60 font-thin'>Let our estimating and design team assess your project.</h4>
                    <h4 className='text-md opacity-60 font-thin'>Receive a proposal and free consultation.</h4>
                    <Link className={`bg-black text-white rounded-2xl text-[15px] font-bold p-2 w-[150px] text-center mt-4 mb-3`}>Request Quote</Link>
                    <p className='text-[12px] opacity-40'>Save on your next parking project with Rollpark, the most advanced and eco-friendly semi-permanent parking solution to date.</p>
                </div>
            </section>
            <section className='p-6 flex justify-between lg:px-20 lg:h-[12vh]'>
                <div className='md:flex md:justify-between w-[100vw]'>
                    <div className='md:ml-12'>

                    <div className='font-bold text-sm '>Rollpark</div>
                    <div className='text-sm font-thin'>13700 Providence Road, Suite 200 <br />Weddington, NC 28104</div>
                    </div>
                    <div className='text-xl flex flex-col mt-4 md:mt-0'>
                        <span>704-321-0802</span>
                        <span className=''>info@rollpark.us</span>
                    </div>
                    <div className=' '>
                        <div className='flex mt-4 justify-between w-[150px] text-[grey] md:mt-0'>
                            <Link><FaLinkedinIn /></Link>
                            <Link><FiInstagram /></Link>
                            <Link><IoLogoTwitter /></Link>
                        </div>
                        <div className='text-[12px] font-thin text-[grey] mt-3 '>
                            Copyright © 2018 Rollpark <br />
                            Trademark of Polivka International Company
                        </div>
                    </div>
                </div>
                <div>
                    <img className='absolute right-5 md:right-0 md:left-0 lg:left-10' src={footerlogo} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Footer