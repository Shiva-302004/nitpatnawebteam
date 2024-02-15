import React, { useEffect } from 'react'
import logo2 from "../assets/logo2.png"
import AOS from "aos"
import "aos/dist/aos.css"
const Lists = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='mt-5 w-[100vw]  lg:w-[1000px] md:w-[700px]  ' data-aos="fade-up">
            <h1 className='sm:text-xl lg:px-32  text-md font-bold md:ml-4 ' data-aos="fade-right">A Proven Alternative to Asphalt and Gravel</h1>
            <div className='md:mt-12 mt-6   md:ml-16  lg:ml-[25%] xl:ml-[40%] '>
                <div className='flex justify-evenly  items-center font-semibold ml-1 w-[100%] md:justify-between   '>
                    <span className='text-sm sm:text-lg mr-2 md:ml-[20%]'>Asphalt</span>
                    <span className=' text-[#2EBD71] '><span>Rollpark</span><span className='border border-[#2ebd71]   text-[9px] rounded-full p-[1px] px-[5px] absolute'>R</span></span>
                    <span className='  text-sm sm:text-lg'>Gravel</span>
                </div>
                <hr className=' mt-2 w-[100vw]  lg:w-[600px] md:w-[700px]' />
                <div className=' flex flex-col items-center '>
                    {/* <hr className='h-[1px]'/> */}
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        {/* <hr className='mb-2 w-auto'/> */}
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible  md:mt-2'><img src={logo2} alt="" /></span>
                        <span className=' pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2500">Impervious</span>
                        <span className='  md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2600">Permeable</span>
                        <span className='   md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2700">Permeable</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2500">Expensive</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2600">Less Expensive</span>
                        <span className=' md:mt-2  font-semibold w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2700">Comparable Cost</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2200">Cannot be reused</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2300">Re-usable</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2500">Not usually reused</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2500">15 years life</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2100">7+ years life</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2200">5-7 years life</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2000">2-3 weeks per acre</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="1900">1 week per acre</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1800">-1 week per acre</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1600">ADA accessible</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2200">ADA accessible</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1800">Not ADA accessible</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1800">No LEED</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="1600">Up to 7 LEED</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1700">No LEED</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="1600">Cannot be rented</span>
                        <span className='md:mt-2  font-semibold w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2600">Rentable</span>
                        <span className=' md:mt-2   w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2400">Cannot be rented</span>
                    </div>
                    <div className='flex text-[12px] font-thin justify-evenly md:justify-between items-center mt-4  md:text-[15px] md:mt-2 w-[100%]'>
                        <span className='invisible absolute md:relative md:visible lg:visible xl:visible md:mt-2 '><img src={logo2} alt="" /></span>
                        <span className='  pb-1 md:mt-2 w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2000">Easy Maintenance</span>
                        <span className='   md:mt-2   w-[80px]  md:w-auto' data-aos="fade-right" data-aos-duration="2800">Moderate Maintenance</span>
                        <span className=' md:mt-2  font-semibold w-[80px]  md:w-auto ' data-aos="fade-right" data-aos-duration="2600">Difficult Maintenance</span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Lists