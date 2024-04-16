import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen  bg-zinc-900 flex items-center gap-5 px-32'>

      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative w-full h-full bg-[#004D43] flex items-center justify-center'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;2019</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#102e2a]'> <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>Ratungs 5.D On Clutch</button></div>
        <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#102e2a]'> <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-1.5 py-1.5 mr-3 border-2 rounded-full left-10 bottom-10'>BUSSINESS BOOTCAMP ALUMNI</button></div>
      </div>
    </div>
  )
}

export default Cards
