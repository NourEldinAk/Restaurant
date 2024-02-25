"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const MobileMenu = () => {
  const [open,setOpen]= useState(false);
  const [user , setUser] = useState(false);

  return (
    <div className='flex md:hidden' >
      {!open ? 
      (    <svg onClick={()=>setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 font-extrabold text-secondary bg-primary rounded-full p-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>):(
        <svg onClick={()=>setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 font-extrabold
         text-secondary bg-primary rounded-full p-1 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>      
      )}
  {open &&   <div className={`bg-primary text-xl absolute left-0 w-full
     sm:left-24 sm:w-3/4 h-screen flex flex-col items-center justify-center
     z-10 text-secondary space-y-8 font-extrabold top-40 rounded-lg transform
     transition-opacity duration-300 ease-in-out ${open? 'opacity-100' : 'opacity-0'}
`}>
        {NavLinks.map((link)=>(
          <Link 
          onClick={()=>setOpen(false)}
          className='hover:text-white hover:bg-secondary w-3/4 rounded-lg text-center p-2 
          hover:rotate-6 transition-all duration-300 hover:scale-110
          scale-105  tracking-wider'
          href={link.href} key={link.key}>{link.text}</Link>
        ))}
          <CartIcon colors="bg-secondary text-primary" transition=' hover:rotate-6 transition-all duration-300 hover:scale-110 hover:bg-secondary w-3/4 rounded-lg text-center p-2  justify-center hover:text-white'/>
          {user? (
            <Link className='hover:bg-secondary w-3/4 rounded-lg text-center p-2  hover:text-white hover:rotate-6 transition-all duration-300 hover:scale-110' onClick={()=>setOpen(false)}
            href='/orders'>Orders</Link>
            ):(
              <Link className='hover:bg-secondary w-3/4 rounded-lg text-center p-2  hover:text-white hover:rotate-6 transition-all duration-300 hover:scale-110 ' onClick={()=>setOpen(false)}
              href='/login'>Login</Link>
              )}

            <div className='flex flex-col items-center  justify-center'>
              <div className=' flex items-center justify-start text-center gap-2 mt-6'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-2 text-primary bg-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
                  </div>
            <div  className='text-xs text-secondary w-2/3'>
                    <p >+(90)-327-13-65</p>
                    <p >n.abukhatwa@gmail.com</p>
                    </div>
            

            </div>
            <div className=' flex items-center justify-center text-center gap-2'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-2 text-primary bg-secondary'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
                  </div>
            <p  className='text-xs text-secondary w-2/3'>825A bloor street west, Toronto, Ontario, Canada, M6G 1M1</p>
            

            </div>
              </div>
              
      </div>
      
      }

    </div>
  )
}

export default MobileMenu
