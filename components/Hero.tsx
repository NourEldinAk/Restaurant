import { Gloria_Hallelujah } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']}); // Initialize Gloria Hallelujah font
const Hero = () => {

  return (
    <div className={`w-full  text-white  mt-10 min-h-[400px] flex items-center justify-center ${gloriaHallelujah.className}`}>
      <div className='flex items-center flex-col justify-center'>
        <h1 className={`text-5xl rotate-6 min-h-full gloria-font `} >Tasty & Delicious Food</h1>
        <button className='border-2 px-6 py-3 bg-primary
         text-black-75 font-bold rounded-lg
          border-zinc-800 mt-8 -rotate-6  tracking-wider '>Book A Table</button>

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