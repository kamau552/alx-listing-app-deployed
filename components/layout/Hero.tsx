import React from 'react'
import Image from 'next/image';
import Pill from '@/components/common/Pill';




function Hero() {
  return (
    <>
      <div className="relative sm:hidden bg-white">
        <Pill />
      </div>
      <div className="relative mx-auto my-0 ml-6 mr-6 pl-5 pr-5">
        <Image
          src="/assets/Images/image 1.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover overflow-hidden rounded-2xl"
        />
      </div>
    </>
  )
}

export default Hero;