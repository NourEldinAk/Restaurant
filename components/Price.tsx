"use client";
import React, { useEffect, useState } from 'react'
import Button from './Button';

type Props= {
    price:number,
    id:number,
    options?: {title: string; additionalPrice:number}[]
}

const Price = ({price,id,options}:Props) => {
  const [selected, setSelected] = useState(0)
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
  
      setTotal(
        quantity*(options? price+options[selected].additionalPrice : price)
      )     
  }, [quantity,selected,options,price])
  
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-bold'>${total.toFixed(2)}</h1>
      <div className='flex justify-around items-center'>
        {options?.map((option,index)=>(
            <button className={`border-2 border-primary
             px-3 py-2 font-bold hover:bg-primary transition-all duration-300
              hover:text-secondary ${selected === index ? 'bg-primary text-secondary' : "bg-secondary text-primary"} }`
            } onClick={()=>setSelected(index)} key={option.title}>{option.title}</button>
        ))}
      </div>
      <div className='flex items-center justify-around'>
        <div className='flex items-center justify-around border-2 border-primary py-3 border-r-0 md:w-full px-2 '>
            <span className='font-bold text-lg'>Quantity</span>
            <div className='space-x-4 font-bold text-lg flex'>
                <button className='text-xl px-2   hover:bg-primary text-primary hover:text-secondary transition-all duration-300 ' onClick={()=>setQuantity(prev=> prev > 1 ? prev-1 : prev)}>{'<'}</button>
                <span>{quantity}</span>
                <button className='text-xl px-2   hover:bg-primary text-primary hover:text-secondary  transition-all duration-300 ry' onClick={()=>setQuantity(prev=>prev+1)}>{'>'}</button>
            </div>
        </div>
          <Button bgColor='bg-primary text-secondary
           md:w-64 text-xs rotate-0 text-center
            mt-0 rounded-none border-2 md:border-primary md:py-4 md:text-sm px-3 py-1  w-full ' title='Add To Cart'></Button>
      </div>
    </div>
  )
}

export default Price
