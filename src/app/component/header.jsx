import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <>
    <div id="navbar" className="flex justify-center items-center w-full h-[10vh] gap-[4rem]">
      <div id="logo" className="w-[10%]">    
        <Image src="/Logos.png" alt="Logo" width={0} height={0} sizes="100vw" className="w-full h-auto" />
      </div>
      <div id="nav" className="w-auto h-full">
        <ul className="flex justify-center items-center w-full h-full text-xl font-extralight font-sans text-[#FA5D36]">
          <li><a className="px-8 py-4 bg-[#f4f4f4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-500 font-light" href="#">Home</a></li>
          <li><a className="px-8 py-4 bg-[#F4F4F4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-500 font-light" href="#">About</a></li>
          <li><a className="px-8 py-4 bg-[#F4F4F4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-500 font-light" href="#">Services</a></li>
          <li><a className="px-8 py-4 bg-[#F4F4F4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-500 font-light" href="#">Project</a></li>
          <li><a className="px-8 py-4 bg-[#F4F4F4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-500 font-light" href="#">Contact</a></li>
        </ul>
      </div>
        <a href="/contact" className="flex justify-center w-[10%] border-[#FA5D36] border hover:scale-90 hover:border-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-500 font-sans font-extralight py-4 text-lg "> <i className="bi bi-arrow-right"></i> &nbsp;Contact Now</a>
    </div>
    </>
  )
}

export default Header