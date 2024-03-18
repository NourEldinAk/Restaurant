import DeleteButton from '@/components/DeleteButton'
import Price from '@/components/Price'
import { Product } from '@/types/types'
import Image from 'next/image'
import React, { cache } from 'react'

const getProduct = async (id: string)=>{
  const res = await fetch(`http://localhost:3000/api/products/${id}`,{
    cache:"no-store",
  })
  if(!res.ok){
    throw new Error ("Failed!");
  }

  return res.json()
}

const SingleProduct = async ({params} : {params : {id:string}}) => {
  const singleProduct:Product = await getProduct(params.id);

  return (

      <div className='h-full  bg-secondary flex flex-col lg:flex-row lg:p-24 w-screen space-y-8 py-12 relative'>
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
        <Price product={singleProduct} ></Price>
      </div>
      <DeleteButton id={singleProduct.id}/>
      </div>

  )
}

export default SingleProduct
