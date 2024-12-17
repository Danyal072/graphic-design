'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Header from './component/header'

export default function Home() {
  const mainRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('#pic-area img', { opacity: 0, scale:0.8, duration: 1 }, '-=0.5')
      .from(['#creative-text', '#portfolio-text'], { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3 }, '-=0.5')
      .from('#intro-text', { opacity: 0, y: 50, duration: 1 })
      .from('#name h1', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
      .from('#name p', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
      .from('#button', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
      // .from('#social-icon a', { opacity: 0, x: -50, stagger: 0.2, duration: 0.5 }, '-=0.5')

  }, { scope: mainRef })

  return (
    <div ref={mainRef} id="main" className="w-full min-h-screen bg-[#2A2B30] text-white overflow-hidden">
      <Header className="z-10" />
      <div id="main-area" className="min-h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
        <div id="text-content" className="w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-start relative mb-8 lg:mb-0">
          <h1
            id="creative-text"
            className=" lg:block relative md:text-[10rem] md:translate-x-[12rem] lg:absolute bottom-0 top-[0] left-0 z-0 text-[7rem] lg:text-[8rem] xl:text-[12rem] text-transparent font-bold tracking-wider transform -translate-x-[0rem] "
            style={{
              WebkitTextStroke: "1px #fa5d363d",
              fontFamily: "sans-serif",
            }}
          >
            Creative
          </h1>
          <div id="intro-text" className="w-full flex justify-center lg:justify-start items-center relative text-xl lg:text-2xl font-light font-sans uppercase gap-4 lg:gap-6 mb-4 lg:mb-0">
            <div id="line" className="w-16 lg:w-36 h-[2px] bg-[#FA5D36]"></div>
            <p className="tracking-[.25rem] lg:tracking-[.5rem] text-[#FA5D36]">Introducing</p>
          </div>

          <div id="name" className="w-full text-center lg:text-left">
            <h1 className="text-3xl lg:text-[3.1rem] font-sans font-bold py-3 lg:py-6">I'M MUHAMMAD ABDULLAH</h1>
            <p className="font-sans text-lg lg:text-xl font-light py-3 lg:py-6">Better Design for your Digital Product.</p>
          </div>
          <div id="button" className="flex justify-center lg:justify-start items-center w-full">
            <button className="w-48 lg:w-[12rem] h-12 lg:h-[3rem] border border-[#FA5D36] text-white bg-transparent transition-all duration-500 hover:border-white hover:bg-[#FA5D36] text-lg lg:text-xl font-sans font-light uppercase">
              View Portfolio
            </button>
          </div>
        </div>

        <div id="pic-area" className="w-full lg:w-[50%] flex justify-center items-center relative h-[50vh] lg:h-[90vh] mb-8 lg:mb-0">
          <div id="glow" className="absolute bg-white w-[45%] bg-opacity-20 -translate-y-[2rem] lg:-translate-y-[5rem] blur-2xl rounded-full h-[150px] lg:h-[250px]"></div>
          <Image
            src="/me1.png"
            alt="Muhammad Abdullah"
            width={500}
            height={800}
            className="w-auto h-full object-contain relative z-20"
            style={{ 
              transform: "scale(0.98)",
            }}
          />
          <h1
            id="portfolio-text"
            className="absolute text-[5.5rem] lg:text-[12rem] overflow-y-hidden text-transparent font-bold tracking-wider transform translate-x-[0rem] lg:translate-x-[5rem] z-0 font-sans bottom-0"
            style={{
              WebkitTextStroke: "1.5px #575760",
            }}
          >
            Portfolio
          </h1>
        </div>
            
        <div id="social-icon" className="hidden w-full lg:w-[5%] lg:flex md:flex justify-center items-center mt-8 lg:mt-0">
          <div className="flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-6">
            <div className="hidden lg:block h-36 w-[0.5px] bg-[#FA5D36]"></div>
            <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="hidden lg:block h-36 w-[1px] bg-[#FA5D36]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

