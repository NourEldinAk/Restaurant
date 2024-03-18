"use client";
import { useCartStore } from '@/utils/store';
import Image from 'next/image';
import React, { useEffect } from 'react'

const CartPage = () => {

  const {products , totalItems , totalPrice, removeFromCart }= useCartStore();

  useEffect(()=>{
    useCartStore.persist.rehydrate();
  },[])


  return (
    <div className="h-[140vh] md:h-[calc(100vh-9rem)] flex flex-col text-primary lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {products.map((item)=>(
        <div className="flex items-center justify-between mb-4" key={item.id}>
          {item.img && 
          <Image src={item.img} alt="product image" width={100} height={100} /> }

          <div className="">
            <h1 className="uppercase text-xl font-bold">{item.title} ({item.quantity})</h1>
            <span>{item.optionTitle}</span>
          </div>
          <h2 className="font-bold">${item.price * item.quantity}</h2>
          <span className="cursor-pointer" onClick={()=>removeFromCart(item)}>X</span>
        </div>
        ))}
       </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-[#eeeeee] flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6 text-red-400">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="hover:border-green-500 hover:bg-white border-2 bg-secondary hover:text-green-500  hover:font-semibold
         transition-all duration-300
         p-3 rounded-md w-1/2 self-end text-white mt-6 tracking-widest">
          CHECKOUT
        </button>
      </div>
      
    </div>
  );
};

export default CartPage
