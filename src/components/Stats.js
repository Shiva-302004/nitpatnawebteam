import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import logo1 from "../assets/logo2.png"
import logo2 from "../assets/logo3.png"
import logo3 from "../assets/logo4.png"
import logo4 from "../assets/logo5.png"
// import logo1 from "../assets/logo2.png"
const Stats = () => {
  return (
    <div className='flex flex-col md:flex-row p-2'>
        <div className='flex  justify-between'>
            <div className='flex flex-col md:flex-row'>
                <div className=' flex flex-col w-[33vw] md:w-[150px]'> 
                    <div className='flex flex-row'>
                        <div className='mt-2'><img src={logo1} className="h-[20px] w-[40px]"alt="" /></div>
                        <div className='text-2xl font-medium pb-1 ml-2'>40%</div>
                    </div>
                    <div className='text-[grey] text-[18px]'>
                    less cost that losing asphalt
                    </div>
                </div>
                <div className=' flex flex-col w-[33vw] mt-4 md:mt-0 md:w-[150px]'> 
                    <div className='flex flex-row'>
                        <div className='mt-2'><img src={logo2} className="h-[20px] w-[40px]"alt="" /></div>
                        <div className='text-2xl font-medium pb-1 ml-2'>40%</div>
                    </div>
                    <div className='text-[grey] text-[18px]'>
                    less cost that losing asphalt
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col md:flex-row ml-6 md:ml-4'>
            <div className=' flex flex-col w-[33vw] md:w-[150px]'> 
                    <div className='flex flex-row'>
                        <div className='mt-2'><img src={logo3} className="h-[20px] w-[40px]"alt="" /></div>
                        <div className='text-2xl font-medium pb-1 ml-2'>40%</div>
                    </div>
                    <div className='text-[grey] text-[18px]'>
                    less cost that losing asphalt
                    </div>
                </div>
                <div className=' flex flex-col w-[33vw] mt-4 md:mt-0 md:w-[150px]'> 
                    <div className='flex flex-row'>
                        <div className='mt-2'><img src={logo4} className="h-[20px] w-[40px]"alt="" /></div>
                        <div className='text-2xl font-medium pb-1 ml-2'>40%</div>
                    </div>
                    <div className='text-[grey] text-[18px]'>
                    less cost that losing asphalt
                    </div>
                </div>
            </div>
        </div>
        <div className='text-md font-semibold flex mt-3'><span>12 + reason to choose rollpark </span><MdArrowRightAlt className='text-xl ml-2 mt-1'></MdArrowRightAlt> </div>
    </div>
  )
}

export default Stats