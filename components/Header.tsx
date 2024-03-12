"use client";

import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MenuIcon from './MobileMenu'
import MobileMenu from './MobileMenu'
import { usePathname } from 'next/navigation'
import CartIcon from './CartIcon'
import UserLinks from './UserLinks';
import { useCartStore } from '@/utils/store';

type Props = {}


const Header = (props: Props) => {
    const [bgOpacity, setBgOpacity] = useState('bg-opacity-100');
    const pathname = usePathname();

    useEffect(() => {
      if ( pathname === '/') {
        setBgOpacity('bg-opacity-0');
      } else {
        setBgOpacity('bg-opacity-100');
      }
    }, [pathname]);
  
  return (
   <nav className={`border-b-2 border-primary  md:px-6 py-6 w-full bg-secondary   mx-auto text-zinc-200
   ${bgOpacity}
   `}
   >
    <div className='grid grid-cols-2 md:grid-cols-3 place-items-center '>
    <div className=' flex-col items-center text-center hidden md:flex'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-2 text-primary '>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
                </div>
          <p  className='text-xs text-black-10 w-2/3'>825A bloor street west, Toronto, Ontario, Canada, M6G 1M1</p>
            

            </div>

        <div className='text-2xl uppercase font-bold text-primary flex flex-col items-center   cursor-pointer '>
        <div className='rounded-full  '>
            <Image src=
            "/Logo.png"
            alt='Logo'
            width={100}
            height={100}
            className='p-1  h-12 w-12 bg-primary rounded-full'
            />
        </div>
            <div className='text-sm md:text-base'>
                Dishinary
                </div>
            
            </div>
        <div className='flex-col items-center text-center hidden md:flex'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-2 text-primary '>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
                </div>
                <div className='text-primary text-sm '>
                    <p >+(90)-327-13-65</p>
                    <p >n.abukhatwa@gmail.com</p>
                </div>
                        

            </div>
            {/* menu icon */}
        <MobileMenu/>

    </div>
    <div className='w-full mt-4 hidden md:block'>
        <ul className='flex space-x-4 mx-auto w-full justify-center font-bold'>
            {NavLinks.map((link)=>(
                <Link href={link.href} key={link.key} className='hover:text-primary hover:rotate-6 transition-all duration-300 hover:scale-110'>
                    {link.text}
                </Link>
            ))}
            <CartIcon colors="bg-primary text-secondary" transition=' hover:text-primary hover:rotate-6 transition-all duration-300 hover:scale-110'/>
            <UserLinks/>
        </ul>
    </div>

   </nav>
  )
}

export default Header