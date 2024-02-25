import { SocialIcon } from 'react-social-icons'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='border-t-2 border-primary text-zinc-200 place-items-center h-full mt-24 md:mt-9
    grid grid-rows-3 md:grid-rows-1 md:grid-cols-3  md:px-12 text-center  mb-5 pt-3 text-sm space-y-8 '>
     <div className='space-y-3 w-full flex flex-col items-center justify-center  '>
          <h1 className='font-bold text-primary text-lg '>
            <Image
            className='p-1 bg-primary rounded-full '
            src="/Logo.png"
            alt='Logo'
            width={40}
            height={40}
            >

            </Image>
          </h1>
          <p className='space-y-2 w-3/4'>Our buzzy food-hall style concept is inspired by 
            international dining styles, especially in Asia. Explore 
            the following fast-action food</p>
            <ul className='flex items-center justify-center space-x-4 '>
              <li><SocialIcon style={{width:30 , height:30}} url='www.facebook.com'></SocialIcon></li>
              <li><SocialIcon style={{width:30 , height:30}} url='www.instagram.com'></SocialIcon></li>
              <li><SocialIcon style={{width:30 , height:30}} url='www.twitter.com'></SocialIcon></li>

            </ul>
        </div>
        <div className='space-y-1'>
          <h1 className='font-bold text-primary text-lg mb-3'>Opening Times</h1>
          <ul className='space-y-2'>
            <li>Mon - Fri : 9:00am - 22:00pm</li>
            <li>Sat: 10:00am - 23:00pm</li>
            <li>Sun: 5:00pm - 23:00pm</li>
            <li>Holidays: Closed</li>
            <li>Happy Hours: 18:00pm - 20:00pm</li>
         </ul>

        </div>
        <div className=' space-y-2'>
        <h1 className='font-bold text-primary text-lg '>Location</h1>
        <ul className='space-y-2 flex-col w-3/4 mx-auto  '>
          <li>Address:</li>
          <li>4517 Washington Ave. Manchester, Kentucky 39495, USA</li>
          <li>Booking & Contact:</li>
          <li>Basilicofood123@gmail.com</li>
          <li>978-212-8600</li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
