import { categories } from '@/constants';
import { Gloria_Hallelujah } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']}); // Initialize Gloria Hallelujah font
const MenuPage = () => {

  return (
    <div className={`rounded-lg  lg:gap-12 px-24 mt-4 w-full mx-auto py-12 overflow-hidden  h-[calc(100vh-10.5rem)] lg:h-[calc(100vh-15.4rem)]
    grid max-lg:grid-rows-3 bg-contain lg:grid-cols-3 text-center max-lg:place-content-center
    text-white 
    ${gloriaHallelujah.className}` }>

      {categories.map((category)=>(
        <Link href={`/menu/${category.slug}`} key={category.id} className='bg-secondary lg:w-full h-full relative rounded-lg shadow-lg shadow-black cursor-pointer
        transfrom hover:opacity-95 hover:scale-105 transition-all duration-300 w-screen
         overflow-hidden
        '>
         {category.img && <Image src={category.img}
          alt='fast-food'
          width={1000}
          height={1000}
          className=' rounded-lg relative z-0 opacity-65 hover:opacity-85 top-[-240px] 2xl:top-[-170px] '
          ></Image>} 
          <h1 className={`absolute bottom-0 z-1  px-6 lg:px-3 py-2 
           lg:text-xl lg:w-[100%]
           tracking-widest font-bold rounded-r-lg 
          ${category.textColor} ${category.bgColor}` }>{category.title}</h1>
          
          </Link>
      )) }
    </div>
  )
}

export default MenuPage
