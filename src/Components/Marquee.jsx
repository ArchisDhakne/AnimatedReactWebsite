import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (

    <div data-scroll data-scroll-speed=".2" className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#beeee8] '>
      <div className="text border-t-2 border-b-1 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1 intial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[16vw] leading-none font-mono uppercase -mb-[vw] pl-32 pt-10 pr-10 font-semibold'>We are ochi </motion.h1>
         
        <motion.h1 intial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[16vw] leading-none font-mono uppercase -mb-[vw] pl-32 pt-10 pr-10 font-semibold'> We are ochi</motion.h1> 
        
        <motion.h1 intial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[16vw] leading-none font-mono uppercase -mb-[vw] pl-32 pt-10 font-semibold'> We are ochi</motion.h1>
        
      </div>
    </div>
  )
}

export default Marquee
