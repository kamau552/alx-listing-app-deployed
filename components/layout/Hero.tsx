import React from 'react'
import Image from 'next/image';
import Pill from '@/components/common/Pill';




function Hero() {
  return (
    <>
      {/* Mobile filters appear above hero */}
      <div className="md:hidden mb-6">
        <Pill />
      </div>

      {/* Hero Image */}
      <div className="px-12 sm:px-6 md:px-8">
        <div className="relative w-full h-[200px] sm:h-[450px] md:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/Images/image 1.png"
            alt="Hero Image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop filters appear below hero */}
      <div className="hidden md:block">
        <Pill />
      </div>
    </>
  );
}

export default Hero;