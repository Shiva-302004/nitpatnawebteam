import React, { useState } from 'react'
import truck from "../assets/truck.png"
import truck2 from "../assets/truck2.png"
import drop from "../assets/drop.png"
import clock from "../assets/clock.png"
import calendar from "../assets/calender.png"
import chair from "../assets/chair.png"
import { string1,string2 } from './Arrays'
const BelowList = () => {
   
    
    const [click,setclick]=useState(0)
    
  return (
    <div className='mt-4 ml-4 w-[100vw] sm:w-auto h-[70vh] md:h-[40vh] lg:px-32 md:px-12'>
        <h1 className='text-xl font-bold '>Tailored to Your Industry</h1>
        <div className='mt-8'>
            <div className='  right-20 absolute md:relative md:flex md:right-0 z-20'>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===0?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={truck} onClick={()=>setclick(0)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-0' >Autologistics</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===1?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={truck2} onClick={()=>setclick(1)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-0'>Auto- Manufacturing</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===2?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={calendar} onClick={()=>setclick(2)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-3'>Events</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===3?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={chair} onClick={()=>setclick(3)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-0'>HollyWood</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===4?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={drop} onClick={()=>setclick(4)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-0'>Permitting Restrictions</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===5?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img className='w-[57px ] h-[57px ] rounded-full' src={clock} onClick={()=>setclick(5)} alt="" />
                <span className='ml-4 mt-4 text-[9px] md:ml-0'>Universities</span>
                </div>
                <div className={`w-[65px]  h-[65px]  font-semibold text-[grey]  md:ml-3 md:mt-0 rounded-full ${click===6?"border  border-[orange] p-1":""} md:flex-col flex`}>
                <img src={clock} className='w-[57px ] h-[57px ] bg-white  rounded-full'  alt="" onClick={()=>setclick(6)} />
                <span className='ml-4 mt-4 text-[9px] md:ml-0 '>Parking managers</span>
                </div>
            </div>
            <div className={`w-[50vw] bg-white  md:w-[70vw]   md:h-[25vh] md:mt-16  mt-14 `} style={{transition:"ease-in 0.6s 0.2s"}}>
                <h1 className='text-sm font-bold'>{string1[click]}</h1>
                <p className='text-sm font-thin mt-8'>{string2[click]}</p>
            </div>
            
        </div>
    </div>
  )
}

export default BelowList