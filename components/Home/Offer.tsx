import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import CountDown from '../CountDown'

const Offer = () => {
  return (
    <div className='h-full bg-secondary flex flex-col md:flex-row p-24'>
      {/* Image container */}
      <div className='h-full flex-1 relative flex flex-col justify-center items-center space-y-12  '>
        <Image
        src="/imgs/pizza-2.jpg"
        alt="special offer pic"
        width={1000}
        height={1000}
        className='h-[400px]  w-[400px] rounded-full border-8 border-primary opacity-85 transform hover:scale-90
        hover:opacity-75 transition-all duration-300 cursor-pointer shadow-lg shadow-black-75'
        ></Image>
        
      <CountDown />
      </div>
      {/* content Container */}
      <div className=' w-1/2 text-primary flex-col items-center justify-center my-auto text-center space-y-16 px-16'>
        <h1 className='text-4xl font-bold  text-center shadow-lg shadow-black-75 py-3 px-2'>Pizza Margherita</h1>
        <p className='text-lg  text-center text-zinc-300 px-16'>Indulge in the timeless simplicity and vibrant flavors of our classic Pizza Margherita. Crafted with the finest ingredients, each bite unveils a symphony of fresh tomato sauce, creamy mozzarella cheese, and aromatic basil leaves atop a perfectly baked crust.</p>
        <Button bgColor='bg-primary text-secondary w-1/2 text-xs rotate-0 text-center ' title='Add To Cart'></Button>
      </div>
    </div>
  )
}

export default Offer
