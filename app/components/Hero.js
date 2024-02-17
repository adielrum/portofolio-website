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
                <button className="bg-black text-white px-4 py-2 rounded">Download CV</button>
            </div>
            <div className='w-1/2 text-left px-2'>
                <button className="text-black border-black border px-4 py-2 rounded">Contact me</button>
            </div>
        </div>
      </div>
      {/* this is the right hero */}
      <div className="w-1/3">
        <Image 
          src="/avatar.png"
          width={400}
          height={400}
          alt="profile pic"
        />
      </div>
    </div>
  )
}

export default Hero