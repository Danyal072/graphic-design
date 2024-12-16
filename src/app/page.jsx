"use client"
import { useState } from "react";
import Image from 'next/image'
import Header from './component/header'
export default function Home() {
  return (
   <>
   <div id="main" className="w-full h-full bg-[#2A2B30]" >
    <Header  className="z-10"/>
    <div id="main-area" className="h-[90vh] w-full flex justify-center items-center">
     
      <div id="free-space" className="w-[10%] h-full"></div>
      
      <div id="text-content" className="w-[25%] h-full flex flex-col justify-center items-center relative">
      <h1
        className="absolute top-[-5rem] z-0 -translate-x-[0rem] text-[12rem] text-transparent font-bold tracking-wider transform"
        style={{
          WebkitTextStroke: "1px #fa5d363d", // Outline effect
          fontFamily: "sans-serif", // Optional font style
        }}
      >
        Creative
      </h1>
          <div id="intro-text" className="scale-110 w-[100%] flex justify-center items-center relative text-2xl font-light font-sans uppercase gap-6">
            <div id="line" className="w-[9rem] h-[2px] bg-[#FA5D36]"></div>
            <p className="space-x-4 tracking-[.5rem] text-[#FA5D36]">Introducing</p>
          </div>

          <div id="name" className="w-[100%]">
            <h1 className="text-[3.1rem] scale-110 font-sans font-bold py-6">I'M MUHAMMAD ABDULLAH</h1>
            <p className="scale-110 font-sans text-xl font-light py-6">Better Design for your Digital Product.</p>
          </div>
          <div id="button" className="flex justify-start items-center w-[100%]">
            <button className="scale-110 w-[12rem] h-[3rem] border border-[#FA5D36] text-white bg-transparent transition-all duration-500 hover:border-white hover:bg-[#FA5D36] text-xl font-sans font-light uppercase">View Portfolio</button>
          </div>
          
      </div>

      <div id="pic-area" className="w-[50%] flex justify-center items-center relative h-full">
        <div id="glow" className="absolute bg-white w-[45%] bg-opacity-20 -translate-y-[5rem] blur-2xl rounded-full h-[250px]"></div>
        <img src="/me.png" alt="Muhammad Abdullah" className="w-auto relative h-full z-20" style={{ 
          // filter: "drop-shadow(0px 0px 20px #FA5D36)",
          transform: "scale(0.98)",
        }}/>
        <h1
            className="absolute text-[12rem] overflow-y-hidden text-transparent font-bold tracking-wider transform translate-x-[5rem] scale-110 z-0 font-sans bottom-0"
            style={{
              WebkitTextStroke: "1.5px #575760",
              transform: "scale(1)",  // Outline effect
            }}
          >
        Portfolio
      </h1>
      </div>
      <div id="social-icon" className="w-[5%] h-full flex justify-center items-center">
      <div className="relative flex flex-col items-center space-y-6">

            {/* <!-- Orange Vertical Line --> */}
            <div className="h-36 w-[0.5px] bg-[#FA5D36]"></div>

            {/* <!-- Social Media Icons --> */}
            <div className="space-y-4">
              {/* <!-- Facebook --> */}
              <a href="#" className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                <i className="bi bi-facebook"></i>
              </a>
              {/* <!-- Instagram --> */}
              <a href="#" className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                <i className="bi bi-instagram"></i>
              </a>
              {/* <!-- Twitter --> */}
              <a href="#" className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                <i className="bi bi-twitter"></i>
              </a>
              {/* <!-- YouTube --> */}
              <a href="#" className="flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                <i className="bi bi-youtube"></i>
              </a>
            </div>

            {/* <!-- Bottom Orange Line --> */}
            <div className="h-36 w-[1px] bg-[#FA5D36]"></div>

          </div>
      </div>
      <div id="free-space" className="w-[10%] h-full"></div>
    </div>

   </div>
   <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>

   </>
  );
}
