import React, { useState } from 'react'
import { BiSolidMessage } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import men from "../assets/men.png"
const ChatBox = () => {
    const [click,setclick]=useState(false)
    const handleclick=()=>{
        setclick(!click)
    }
  return (
    <>
    <div className={`fixed z-10 right-3 bottom-4 w-[60px] h-[60px] rounded-full bg-[#262a3f]  pt-3 pl-3`}>
        {
        click?
        <BiSolidMessage className='text-white absolute text-2xl z-12 text-center' onClick={handleclick}></BiSolidMessage>
        :
        <RxCross2 className='text-white absolute text-2xl z-12 text-center' onClick={handleclick}></RxCross2>
}
    </div>
    <div >
    {
        !click?<ChatMessage handleclick={handleclick}/>:""
    }
    </div>
    </>
  )
}
const ChatMessage=({handleclick})=>{
    return (
        <div className='fixed z-20 w-[100vw] right-0 bottom-0  md:right-9  md:bottom-20 bg-white text-black h-[180px] md:h-[220px] md:w-[350px]   overflow-visible'>
            <div className='absolute -mt-1   h-[7px] w-[100%] pr-[4px] rounded-md bg-[#262a3f]'></div>
            
            <img src={men} className='absolute -mt-9 h-[70px] w-[70px] pr-[4px] rounded-full border border-[grey] z-10 overflow-visible ' alt="" />
            <span className='absolute left-16 text-[14px] top-1'>Basil polvika from Rollpark</span>
            <div className='mt-6 lg:mt-10'>
                <p className='text-[14px] md:text-[16px] font-thin pl-4'>
                Hey, how can I help you? Just in case I'm away from my desk, can you please include your name, company, phone, and email address? Thanks!
                </p>
                <RxCross2 className='absolute right-3 top-3 visible md:invisible' onClick={handleclick}></RxCross2>
                <div className='lg:absolute bottom-8 lg:bottom-3'>
                <input type="text" className='mx-4 mt-2 lg:mt-8 h-[50px] w-[85vw] md:w-[300px] border border-black rounded-lg ' />
                <div className='text-center font-thin text-[14px] lg:mt-2'>chat by drift</div>
                </div>
            </div>
        </div>
    )
}
export default ChatBox