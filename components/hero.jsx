import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Navbar className={"absolute top-0 left-0 right-0 z-10 "}/>
      <video
        src={"/videos/video1.mp4"}
        className="w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
      </video>
    </section>
  )
}

export default Hero;