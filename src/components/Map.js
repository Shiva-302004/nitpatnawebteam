import React from 'react'
import green from "../assets/green.png"
import peopple from "../assets/people.png"
import offices from "../assets/office.png"
import head from "../assets/head.png"
import { GoDotFill } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
const Map = () => {
    return (
        <div className=''>
            <div className=''>
                <h1 className='md:flex md:flex-col sm:ml-4 ml-1 lg:ml-10 mr-1 w-[100vw] md:w-auto'><span className='text-sm sm:text-xl font-bold'>Patented cutting edge technology </span><span className='text-sm sm:text-xl font-bold md:font-thin md:text-[grey] mr-1'>backed by decades of experience in construction</span></h1>
                <div className=' md:flex'>
                    <div className='w-[100vw]  bg-[#46c97e] mt-1 md:w-[50vw] h-[50vh] md:pb-5'>
                        <div className='ml-3 mr-3 sm:ml-16 md:ml-6 lg:ml-16 pt-6'><span className=' font-bold text-xl'>US Patent </span><span className='font-serif'>No. 6,361,245B1</span></div>
                        <p className='ml-3 mr-3 sm:ml-16 sm:mr-16 md:ml-6 lg:ml-16 mt-1 md:text-md lg:text-lg text-lg font-serif font-thin opacity-50'>The product is resistant to tears, soft chemicals, puncture damage and ultraviolet light exposure. It’s also unaffected by hydrocarbons, mildew, rot and the freeze and thaw cycle.</p>
                        <ul className='ml-3 mr-3 sm:ml-16 md:ml-6 lg:ml-16 sm:mr-16 mt-1 flex justify-between'>
                            <li className='w-[150px]'>
                                <span className=''>
                                    <img src={green} alt="" />
                                    <span className='text-[14px] opacity-50'>Industrial Fabrics International Award</span>
                                </span>
                            </li>
                            <li className='w-[150px] ml-1'>
                                <span className=''>
                                    <img src={green} alt="" />
                                    <span className='text-[14px] opacity-50'>Top 3 of 100 suppliers by CSX</span>
                                </span>
                            </li>
                            <li className='w-[150px] ml-1'>
                                <span className=''>
                                    <img src={green} alt="" />
                                    <span className='text-[14px] opacity-50'>3 Safety Awards from Advocare</span>
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div className='bg-[url(/src/assets/map.png)] w-[100vw] md:w-[50vw] h-[50vh]  object-fill bg-cover  md:mt-1' style={{objectFit:"cover"}}>
                        <ul className=' ml-3 pt-6 flex'>
                            <li className=''>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span><img className='mt-2' src={peopple} alt="" /></span>
                                        <span className='text-white text-2xl italic ml-2'>150</span>
                                    </div>
                                    <span className='text-[grey] text-[16px]'>employees</span>
                                </div>
                            </li>
                            <li className=' ml-4'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span><img className='mt-2' src={offices} alt="" /></span>
                                        <span className='text-white text-2xl italic ml-2'>50</span>
                                    </div>
                                    <span className='text-[grey] text-[16px]'>offices</span>
                                </div>
                            </li>
                            <li className='ml-4'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <span><img className='mt-2' src={head} alt="" /></span>
                                        <span className='text-white text-2xl italic ml-2'>400</span>
                                    </div>
                                    <span className='text-[grey] text-[16px]'>years of experience</span>
                                </div>
                            </li>
                        </ul>
                        <div className='md:absolute'>
                            <span className='flex absolute  left-[4%] mt-[40%] md:mt-32 md:left-7'>
                                <GoDotFill className='text-[#46c97e] mt-1'></GoDotFill>
                                <span className='text-white'>Calgary</span>
                            </span>
                            <span className='flex absolute  left-[12%] mt-[48%] md:mt-24 md:left-12'>
                                <span className='text-white'>Dallas</span>
                                <GoDotFill className='text-[#46c97e] mt-1'></GoDotFill>
                            </span>
                            <span className='flex absolute  left-[16%] mt-[30%] md:mt-28 md:left-3'>
                                <GoDotFill className='text-[#46c97e] mt-1'></GoDotFill>
                                <span className='text-white'>Warren</span>
                            </span>
                            <span className='flex absolute left-[32%] mt-[44%] md:mt-36 md:left-2'>
                                <AiFillStar className='text-[#46c97e] mt-1 '></AiFillStar>
                                <span className='text-white'>Charlotte</span>
                            </span>
                            <span className='flex absolute  mt-[30%] right-[5%] pb-4 md:mt-32 md:right-0 md:left-64'>
                                <span className='text-white'>London</span>
                                <GoDotFill className='text-[#46c97e] mt-1'></GoDotFill>
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-center mt-1'><span>Company</span> <FaLongArrowAltRight className='ml-2 mt-1'></FaLongArrowAltRight></div>
            </div>
        </div>
    )
}

export default Map