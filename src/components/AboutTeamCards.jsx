import React from 'react'

function AboutTeamCards({image, title, description}) {
  return (
  
       <div className='flex flex-col items-center justify-center gap-3 rounded-2xl shadow-3xl shadow-[gray-500] w-[45%] md:w-[30%] text-white p-5 bg-[#234C6A]'>
              <img src={image} alt={title} className='h-[150px] w-[150px] shadow-2xl rounded-full'/> 
              <h1 className='text-[#E3E3E3] text-2xl font-bold'>{title}</h1>
              <p className='text-gray-400 '>{description}</p>
            </div>
  
  )
}

export default AboutTeamCards
