import { Gloria_Hallelujah } from 'next/font/google';
import React from 'react'

type Props={
    title:string,
    size:string
}
const gloriaHallelujah = Gloria_Hallelujah({ subsets: ["latin"] , weight:['400']}); 

const HeaderText = (props:Props) => {
  return (
    <h1 className={`min-h-full text-center font-extrabold ${props.size} ${gloriaHallelujah.className}`} >
        {props.title}</h1>

  )
}

export default HeaderText
