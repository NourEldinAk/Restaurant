import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
   <nav className='border-b-2 border-primary px-6 py-6 w-full  mx-auto text-zinc-200'>
    <div className='grid grid-cols-3 place-items-center '>
    <div className='flex flex-col items-center text-center'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-2 text-primary '>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
                </div>
          <p  className='text-xs text-black-10 w-2/3'>825A bloor street west, Toronto, Ontario, Canada, M6G 1M1</p>
            

            </div>

        <div className='text-2xl uppercase font-bold text-primary  cursor-pointer '>
        <div className='rounded-full  '>
            <Image src=
            "/Logo.png"
            alt='Logo'
            width={60}
            height={60}
            className='p-1 ml-7 bg-primary rounded-full'
            />
        </div>
            <div>
                Dishinary
                </div>
            
            </div>
        <div className='flex flex-col items-center text-center'>
                <div className='border-[3px] p-1 border-primary rounded-full mb-3 text-primary '>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
                </div>
          <p  className='text-primary text-sm'>+(90)-327-13-65</p>
          <p className='text-primary text-sm' >n.abukhatwa@gmail.com</p>
          
            

            </div>
    </div>
    <div className='w-full mt-4'>
        <ul className='flex space-x-4 mx-auto w-full justify-center font-bold'>
            <li>Home</li>
            <li>Menu</li>
            <li>Dishes</li>
            <li>Cart</li>
            <li>Contact</li>
        </ul>
    </div>
   </nav>
  )
}

export default Header