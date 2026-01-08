import React from 'react'
import { useState } from 'react'
import movies from '../data/movies'
import { Clapperboard } from 'lucide-react'
import SelectBox from "../components/SelectBox"
import MovieCards from '../components/MovieCards'


function Movie() {
  const [searchMovies, setSearchMovies] = useState("");
  const [movieType, setMovieType] = useState("All");
  const [movieLang, setMovieLang] = useState("All");

  const filteredMovies = movies.filter((movie) => {
    const newMatch = movie.name.toLowerCase().includes(searchMovies.toLowerCase());
    const typeMatch = movieType === "All" || movie.type === movieType;
    const languageMatch = movieLang === "All" || movie.language === movieLang;
    return typeMatch && languageMatch && newMatch;
  });

  return (
    <div className='bg-[#1B3C53] min-h-screen'>
      <div className="relative bg-cover  mb-4 bg-[#262b2f] bg-center filter bg-blend-multiply bg-opacity-50 pt-8" style={{ backgroundImage: `url(/movieImages/bg.jpg)` }}>
        < div className='min-h-[70vh]   flex flex-col items-center justify-center  gap-7 px-0  py-4 md:p-4 text-3xl font-bold text-[#E3E3E3]'>
          <div className='flex flex-col gap-7'>
            <h1 className='text-[35px]! backdrop:backdrop-blur-2xl md:text-[50px]! text-center'> Discover Movies You’ll Love</h1>
            <h3 className='text-center text-[22px]! md:text-[30px] text-gray-400'> Browse by genre, language & book instantly</h3>
          </div>
          <div className='flex flex-col w-[100%]  md:flex-row gap-5 items-center justify-center  p-10 '>
            <div className='md:w-[50%] w-[100%]  flex items-center justify-center'>
              <input type='text' placeholder='Search Movies by title ....'
                onChange={(e) => {
                  setSearchMovies(e.target.value)
                }} className='border px-5 w-[100%] text-lg! py-2 hover:scale-3d text-gray-300 focus:outline-none rounded-[4px] border-[1.5px]  border-[#456882]' />
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
        </div>
      </div>
      <div className='flex gap-10 p-7 items-center justify-center flex-wrap '>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCards key={index} {...movie} />
          ))
        ) : (
          <p className="text-[#E3E3E3] text-2xl flex items-center gap-4">No movies found <Clapperboard /></p>
        )}
      </div>
    </div>

  )
}

export default Movie