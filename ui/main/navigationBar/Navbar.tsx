import React from 'react'
import Image from "next/image";

function Navbar() {
  return (
    <div className='w-full h-[65px] bg-black z-50'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            data-aos='flip-right'
            data-aos-duration={600}
            src="/images/logos/GG_WHITE.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* <div className='w-[500px] h-full hidden md:flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <a href="#about-us" className='cursor-pointer'>About event</a>
            <a href="#happening" className='cursor-pointer'>Happening</a>
            <a href="#attendies" className='cursor-pointer'>Attendies</a>
            <a href="#topics" className='cursor-pointer'>topics</a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar