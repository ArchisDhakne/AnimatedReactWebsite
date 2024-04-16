import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import FeaturedProjects from './Components/FeaturedProjects'
import Cards from './Components/Cards'

import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
    <Navbar />
    <LandingPage />
    <Marquee/>
    <About />
    <Eyes />
    <FeaturedProjects/>
    <Cards />
    <Footer />

    </div>
    
    </>
  )
}

export default App
