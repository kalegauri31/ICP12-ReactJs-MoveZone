import React from 'react'

function Movie() {
  return (
   <div className='bg-[#1B3C53] min-h-screen'>
            <div className='flex flex-col w-[100%]  md:flex-row gap-5 items-center justify-center  p-10 '>
                <div className='md:w-[50%] w-[100%]  flex items-center justify-center'>
                    <input type='text' placeholder='Search Movies by title ....'
                        onChange={(e) => {
                            setSearchMovies(e.target.value)
                        }} className='border px-5 w-[100%] py-2 hover:scale-3d text-gray-300 focus:outline-none rounded-[4px] border-[1.5px]  border-[#456882]' />
                </div>
                </div>
                </div>

  )
}

export default Movie