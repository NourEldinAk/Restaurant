import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <Image
      src="/dish.jpg"
      alt='hero pic'
      width={200}
      height={400}
      />
      Hero
    </div>
  )
}

export default Hero
Hero