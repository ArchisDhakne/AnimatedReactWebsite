import React from 'react'

function FeaturedProjects() {
  return (
    <div className='w-full py-10 bg-zinc-900 text-6xl'>    
      <div className='w-full px-10 border-b-2 pb-10'>
        <h1 className='font-semibold text-8xl tracking-tighter' >Featured projects</h1>
      </div>
      <div className='cards flex gap-24 w-full  bg-zinc-900 '>
        <div className='card1 rounded-xl m-16 w-1/2 h-[5vh] border-2   '>
          <img className='rounded-xl h-[75vh]' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
          <button className='px-5 py-2 border-[2px] border-zinc-700 font-light text-sm capitalize rounded-full mr-4  bg-slate-400 hover:bg-slate-500' >Agency</button>
          <button className=' text-sm border-[2px] border-zinc-700 rounded-full p-2 h-fit w-fit ml-4 bg-slate-400 hover:bg-slate-500'>Comapany </button>
        </div>
        <div className='card2 rounded-xl m-16 w-1/2  h-[75vh] '>
          <img className='h-[75vh] rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
