import Price from '@/components/Price'
import Image from 'next/image'
import React from 'react'
import { singleProduct } from '@/constants'
const SingleProduct = () => {
  return (

      <div className='h-full  bg-secondary flex flex-col lg:flex-row lg:p-24 w-screen space-y-8 py-12'>
      {/* Image container */}
      <div className='h-full flex-1 relative flex flex-col justify-center items-center space-y-12 w-screen '>
       {singleProduct.img && <Image
        src={singleProduct.img}
        alt="special offer pic"
        width={1000}
        height={1000}
        className='h-[250px]  w-[250px] lg:w-[550px] lg:h-[450px] rounded-lg  opacity-85 
        hover:opacity-75 shadow-lg shadow-black-75'
        ></Image>}
      </div>

      {/* content Container */}
      <div className='lg:w-1/2 w-screen text-primary flex-col items-center justify-center my-auto text-center space-y-12 px-16'>
        <h1 className='text-2xl lg:text-4xl font-bold    py-3 px-2'>{singleProduct.title}</h1>
        <p className='text-sm lg:text-lg   text-zinc-200 lg:px-16 w-full'>{singleProduct.desc}</p>
        <Price id={singleProduct.id} price={singleProduct.price} options={singleProduct.options}></Price>
      </div>
      </div>

  )
}

export default SingleProduct
