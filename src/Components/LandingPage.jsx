import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUp } from "react-icons/go";
function LandingPage() {
  return (
    
  
    <div 
     data-scroll data-scroll-speed="-.3"
    
    className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-20">{["We Create","Eye-Opening","Presentations"].map((item,index)=>{
          return(
            <div className='masker'>
              <div className='w-fit flex items-end overflow-hidden'>
                { index === 1 && (
                  <motion.div 
                   initial={{width:0}}
                   animate={{width:"5vw"}}
                   transition={{ease:[0.76,0,0.24,1], duration:1}}
                   
                  className='mr-[.1vw] w-[5vw] rounded-md h-[3.1vw] relative bg-green-700'></motion.div>
                )}
                <h1 className='pt-[.1vw] -mb-[1vw] uppercase text-[4vw] leading-[1.39] font-semibold '>
                  {item}
                </h1>
              </div>
            </div>
          );
      })}
      </div>
      <div className='border-t-2 border-zinc-700 mt-48 flex justify-between items-center py-5 px-20'>
      {["For public and private comapnies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light'>{item}</p>)}
      <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[2px] border-zinc-700 font-light text-sm capitalize rounded-full'>Start the project</div>
        <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-700 rounded-full '>
       <span classname="rotate-[45deg]">

        <GoArrowUp />
       </span>
       </div>
      </div>
    </div>
  </div>
  )
}

export default LandingPage
