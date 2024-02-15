import React, { useEffect } from 'react'
import assets3 from "../assets/assets3.png"
import assets4 from "../assets/assets4.png"
import assets5 from "../assets/assets5.png"
import assets6 from "../assets/assets6.png"
import assets7 from "../assets/assets7.png"
import assets8 from "../assets/assets8.png"
import assets9 from "../assets/assets9.png"
import AOS from "aos"
import "aos/dist/aos.css"
const Logos = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    return (
        <div className='flex flex-col mt-1 lg:ml-[10vw] mb-3'>
            <div className='text-xl font-bold ml-4' data-aos="fade-right">Over 1 million cars parked</div>
            <div className='text-xl font-thin ml-4 md:text-[grey]'data-aos="fade-right">on Rollpark for companies like</div>
            <div className='flex flex-col mt-3 md:flex-row'>
                <ul className="flex" data-aos="fade-right" data-aos-duration="2600">
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets3} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets4} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets5} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets6} alt="" /></li>
                </ul>
                <ul className=' flex mt-2 md:mt-0' data-aos="fade-right" data-aos-duration="2600">
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets7} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets8} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets5} alt="" /></li>
                    <li><img className='w-[60px] h-[25px]  ml-4' src={assets9} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Logos