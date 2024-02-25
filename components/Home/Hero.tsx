import { Gloria_Hallelujah } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import Button from '../Button';

const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']}); // Initialize Gloria Hallelujah font
const Hero = () => {

  return (
    <div className={`w-full  text-white  h-[calc(100vh-18rem)] flex items-center justify-center ${gloriaHallelujah.className}`}>
      <div className='flex items-center flex-col justify-center gap-4'>
        <h1 className={`text-4xl md:text-6xl rotate-6 min-h-full gloria-font text-center`} >Tasty & Delicious Food</h1>
        <Button title="Book A Table" bgColor="bg-primary"></Button>

      </div>
      {/* <div className=' mt-5 '> */}
      {/* <Image
      src="/hero-image.jpeg"
      alt='background-image'
      width={0}
      height={0}
      layout='fill'
      className='opacity-10'
      sizes="100vw"
      style={{ width: '80%', height: 'auto', borderRadius:'10%'}}   
        /> */}
      {/* </div> */}
    </div>
  )
}

export default Hero
Hero