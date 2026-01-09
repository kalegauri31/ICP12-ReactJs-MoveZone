import React from 'react'

function AboutTeamCards({image, title, description}) {
  return (
  
       <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1.25 duration-300 justify-center gap-2 rounded-2xl shadow-3xl shadow-gray-900 w-[90%] md:w-[30%] text-white p-5 bg-[#234C6A]'>
              <img src={image} alt={title} className='h-[150px] w-[150px] shadow-2xl rounded-full'/> 
              <h1 className='text-[#E3E3E3]  text-center mt-2 text-xl font-bold'>{title}</h1>
              <p className='text-gray-400 text-center '>{description}</p>
            </div>
  
  )
}

export default AboutTeamCards
