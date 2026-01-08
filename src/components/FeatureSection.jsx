import { useNavigate } from 'react-router'
import MovieCard from '../components/HomeMovieCard'
import movies from '../data/MovieData'
import { ArrowRightIcon } from 'lucide-react'
import Button from '../components/Button'
const FeatureSection = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[#456882] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-white text-3xl font-semibold mb-8">
          Now Showing
          <ArrowRightIcon className="inline-block h-4 w-8 ml-1" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div> 
        <div className="flex justify-center mt-12">
          <Button
          variant="primary"
            title="Show More"
            size="md"
            onClick={() => navigate('/movie')}
          />
        </div>

      </div>
    </section>
  )
}

export default FeatureSection
