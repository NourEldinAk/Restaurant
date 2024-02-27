"use client"

import React from 'react'
import Countdown from 'react-countdown';
const CountDown = () => {
    const endingDate = new Date("03/01/2024")
  return (
    <Countdown className='text-5xl text-primary font-bold border-4 border-primary 
    px-3 py-2 rounded-lg' date={endingDate}/>
  )
}

export default CountDown
