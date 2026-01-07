import React from 'react'
import { useState } from 'react'
import movies from '../data/movies'
import { Languages } from 'lucide-react'
import MovieCard from '../components/MovieCard'
const SelectBox = ({ value, onChange, options }) => {
  return (
    <select className='border px-5 py-2 w-[100%] cursor-pointer md:w-[25%] bg-[#234C6A]  focus:outline-none rounded-[4px] border-[1.5px] text-gray-300 border-[#456882] '
      value={value} onChange={onChange}>
      {
        options.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })
      }
    </select>
  )
}
function Movie() {
  const [searchMovies, setSearchMovies] = useState("");
  const [movieType, setMovieType] = useState("All");
   const [movieLang, setMovieLang] = useState("All");
  return (
    <div className='bg-[#1B3C53] min-h-screen'>
      <div className='flex flex-col w-[100%]  md:flex-row gap-5 items-center justify-center  p-10 '>
        <div className='md:w-[50%] w-[100%]  flex items-center justify-center'>
          <input type='text' placeholder='Search Movies by title ....'
            onChange={(e) => {
              setSearchMovies(e.target.value)
            }} className='border px-5 w-[100%] py-2 hover:scale-3d text-gray-300 focus:outline-none rounded-[4px] border-[1.5px]  border-[#456882]' />
        </div>
        <SelectBox
                    value={movieType}
                    onChange={(e) => setMovieType(e.target.value)}
                    options={["All", "Action", "Comedy", "Drama", "Horror", "Romance", "Thriller"]}
                />
                <SelectBox
                    value={movieLang}
                    onChange={(e) => setMovieLang(e.target.value)}
                    options={["All", "English", "Hindi", "Marathi", "Tamil"]}
                />        
      </div>
        <div className='flex gap-10 p-7 items-center justify-center flex-wrap '>
                {
                  movies.map((movie, index)=>{
                
                   return(
                      <MovieCard {...movie} key={index}/>
                   )
                  })
                }
            </div>
    </div>

  )
}

export default Movie