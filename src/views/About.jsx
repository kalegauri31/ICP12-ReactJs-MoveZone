import React from 'react'
import { Film,Users, ShieldCheck, MapPin } from 'lucide-react'

const fatures=[
  {
    image:<Film />,
    title:"500+",
    description:"Movies Available"
  },
  {
    image:<Users />,
    title:"1M+",
    description:"Happy Customers"
  },{
    image:<ShieldCheck />,
    title:"50+",
    description:"Partner Cinemas"
  },{
    image:<MapPin />,
    title:"100+",
    description:"Cities Covered"
  }
]

function About() {
  return (
    <div className='bg-[#1B3C53] min-h-screen p-1'>
      <div className='flex  items-center bg-[#234C6A] mt-18  flex-col gap-7 md:px-10 py-15 justify-center p-5 text-2xl text-white text-center' >
        <h1 className='text-[40px] md:text-[55px] font-bold text-[#E3E3E3]'>About MoveZone</h1>
        <p className='md:text-xl text-lg  text-gray-400  md:w-[60%] w-[90%]'>Your ultimate destination for seamless movie ticket booking. We bring the magic of cinema right to your fingertips.</p>
      </div>
    </div>
  )
}

export default About