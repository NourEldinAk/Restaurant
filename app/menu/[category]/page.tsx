import Button from '@/components/Button';
import HeaderText from '@/components/HeaderText';
import { Gloria_Hallelujah } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const getProducts = async(category:string)=>{
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
  cache:"no-store"
})
  if(!res.ok){
    throw new Error("failed");
  }

  return res.json();
}

type Props = {
params : {category:string}
}

const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']}); // Initialize Gloria Hallelujah font


const CategoryPage = async ({params}:Props) => {

const products:Products = await getProducts(params.category);


  return (
    <div className='text-primary flex flex-wrap'>
      {products.map((item)=>(
        <Link href={`/product/${item.id}`} key={item.id} className='w-full h-[60vh] border-2 border-primary
        md:w-1/2 lg:w-1/3 p-6 
        '>
          {/* Image container */}
          <div className='relative h-[70%] rounded-full p-4'>
            {item.img && <Image src={item.img} alt='product pic' fill  className='rounded-3xl opacity-70 hover:opacity-85 transform transition-all duration-300'>
              
              </Image>}
          </div>
          {/* Text Container */}
          <div className='flex items-center justify-between  xl:px-12 mt-12 '>
            <Button title="Add To Cart" bgColor='rotate-0 bg-primary text-secondary  mt-[0.1px] lg:text-sm'></Button>
            <HeaderText title={item.title} size='text-xl md:text-3xl '></HeaderText>
            <span className='text-lg font-bold border-2 border-primary p-2 rounded-lg text-secondary bg-primary'>${item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
