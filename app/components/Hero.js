import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex h-screen">
      {/* this is the left hero */}
      <div className="w-2/3 items-center pt-[120px]">
        <h2 className='font-bold text-md text-center'>Hello, i'm</h2>
        <h2 className='font-semibold text-[32px] text-center'>Adiel Rum</h2>
        <h2 className='font-semibold text-[32px] text-center'>Front-end Developer</h2>
        <div className='flex justify-center pt-5'>
            <div className='w-1/2 text-right px-2'>
                <a href="https://drive.google.com/file/d/1GnTUhu79_xEEGZmtMnjXjzl9Yawk9m_f/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white px-4 py-2 rounded">Download CV</button>
                </a>
            </div>
            <div className='w-1/2 text-left px-2'>
                <a href="https://github.com/adielrum" target="_blank" rel="noopener noreferrer">
                  <button className="bg-black text-white px-4 py-2 rounded">GitHub</button>
                </a>
            </div>
        </div>
      </div>
      {/* this is the right hero */}
      <div className="w-1/3 relative">
        <Image 
          src="/avatar.png"
          width={400}
          height={400}
          alt="profile pic"
          className="absolute top-0 left-0 rounded-full"
        />
        <img 
          src="/pic.jpg"
          width={400}
          height={400}
          alt="profile pic"
          className="absolute top-0 left-0 rounded-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero