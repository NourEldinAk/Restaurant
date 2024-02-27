import React from 'react'

 type Props ={
    title: string,
    bgColor : string,
}

const Button = (props : Props) => {
  return (
    <button className={` border-2 px-6 py-3 
    text-black-75 font-bold rounded-lg
     border-zinc-800 mt-8 -rotate-6  tracking-wider
     hover:rotate-0 transition-all hover:bg-transparent md:text-lg hover:border-primary duration-500 hover:text-white
     ${props.bgColor} `}>
        {props.title}
    </button>
  )
}

export default Button
