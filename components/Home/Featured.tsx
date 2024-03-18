import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { Gloria_Hallelujah } from 'next/font/google';
import { Products } from '@/types/types';


const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']});

const getProducts = async()=>{
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("failed")
  }
  return res.json();
}
const Featured = async () => {
  const featuredProducts:Products = await getProducts()
  return (
    <div className='w-screen overflow-x-scroll scrollbar-custom text-primary '>
      {/* Wrapper */}
      <div className=' w-max flex items-center justify-center '>
        {/* single item */}
        {
          featuredProducts.map((item)=>(
            <div key={item.id} className='h-[85vh]  w-screen md:w-[50vw] xl:w-[33.333vw] rounded-t-lg pb-5  relative flex-col space-y-6 bg-secondary items-center justify-center'>
            {/* title */}
    
            {/* image container */}
            <div className='flex-1 rounded-lg no-margin'>
            {item.img && <Image
              src={item.img}
              alt="item pic"
              width={1000}
              height={1000}
              className='object-contain h-full flex-1 w-full rounded-b-lg mx-auto rounded-lg opacity-80'
              ></Image>
              }
            </div>
            {/* text container */}
            <div className='flex-1 text-center px-4 space-y-3'>
            {/* <div className='h-14 bg-primary flex items-center justify-center rounded-t-lg'> */}
            <h1 className={`text-3xl font-bold  text-center text-[#eeeeee] ${gloriaHallelujah.className} `}>{item.title}</h1>
            {/* </div> */}
              <p className='text-zinc-200 px-12 py-4 '>{item.desc}</p>
              <p className=' text-2xl font-bold'>${item.price}</p>

              <Button bgColor='bg-primary text-secondary md:text-sm text-xs rotate-0' title='Add To Cart'></Button>
            </div>
            </div>
          ))
        }

        
      </div>
      
    </div>
  )
}

export default Featured
