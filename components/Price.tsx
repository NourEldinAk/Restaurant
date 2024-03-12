"use client";
import React, { useEffect, useState } from 'react'
import Button from './Button';
import { Product } from '@/types/types';
import { useCartStore } from '@/utils/store';
import { toast } from 'react-toastify';

type Props= {
    price:number,
    id:string,
    options?: {title: string; additionalPrice:number}[]
}

const Price = ({product}: {product:Product}) => {

  const {addToCart} = useCartStore();

  const handleCart= ()=>{
    addToCart({
      id: product.id,
      title: product.title,
      price: Number(product.price),
      img: product.img,
      ...(product.options?.length && {optionTitle: product.options[selected].title}) ,
      quantity: quantity
    }) 
    toast.success("The Product Added To Cart!")
  }
  
  const [selected, setSelected] = useState(0)
  const [total, setTotal] = useState(Number(product.price))
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    console.log(typeof(product.price))
      if(product.options?.length){
        setTotal(
          quantity * product.price + Number(product.options[selected].additionalPrice )
        )     
      }
  }, [quantity,selected,product])

  useEffect(()=>{
    useCartStore.persist.rehydrate();
  },[])
  
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-bold'>${total}</h1>
      <div className='flex justify-around items-center'>
        {product.options?.length && product.options.map((option,index)=>(
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
                <button className='text-xl px-2 hover:bg-primary text-primary hover:text-secondary transition-all duration-300 ' onClick={()=>setQuantity(prev=> prev > 1 ? prev-1 : prev)}>{'<'}</button>
                <span>{quantity}</span>
                <button className='text-xl px-2 hover:bg-primary text-primary hover:text-secondary  transition-all duration-300 ry' onClick={()=>setQuantity(prev=>prev+1)}>{'>'}</button>
            </div>
        </div>
          <button onClick={handleCart} className='bg-primary text-secondary
           md:w-64 text-xs rotate-0 text-center
            rounded-none border-2 border-primary md:border-primary md:py-4 md:text-sm px-3
             py-[14px] w-full md:mt-0 mt-0 font-semibold hover:text-white hover:bg-secondary transition-all duration-300'>
              <span className='hidden md:block'  >Add to Cart</span>
              <span className='block md:hidden text-base '  >Add</span>
            </button >
            
      </div>
    </div>
  )
}

export default Price
