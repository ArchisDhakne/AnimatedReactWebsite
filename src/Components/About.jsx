import React from 'react'

function About() {
  return (
    <div className='w-full p-20  bg-[#CDEA68] '>
      <h1 className='font-semibold text-[4vw] leading-[3.1vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people. </h1>

      <div className='flex w-full border-t-[1px] border-[#a2b663] pt-10 mt-20 '>
        <div className='w-1/2'>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='flex gap-6 items-center px-6 py-4 uppercase bg-zinc-900 rounded-full text-white mt-10'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className=' bg-[#a3c139] rounded-3xl  '>
          <img className='rounded-3xl h-[70vh] ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
