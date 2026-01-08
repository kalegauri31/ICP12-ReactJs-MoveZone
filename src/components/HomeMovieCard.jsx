import { StarIcon, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router'
import Button from '../components/Button'

const HomeMovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-[260px] bg-gradient-to-b from-[#234C6A] to-[#1B3C53] rounded-2xl p-3 shadow-lg group relative overflow-hidden">
      
      <div
        onClick={() => navigate(`/booking/${movie.id}`)}
        className="aspect-[2/3] h-80 w-full rounded-xl overflow-hidden bg-gray-800 cursor-pointer"
      >
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex flex-col items-center text-center min-h-[160px]">
        <p className="text-white font-bold text-lg truncate">
          {movie.title}
        </p>

        <div className="flex items-center gap-4 text-gray-200 text-xs mt-2">
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-3.5 w-3.5 text-red-400" />
            {movie.year}
          </span>

          <span className="flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5 text-red-400" />
            {movie.duration}
          </span>
        </div>

        <p className="text-gray-300 text-xs mt-3 line-clamp-2 px-2">
          {movie.description}
        </p>

        <div className="flex items-center text-yellow-400 text-xs font-medium mt-3">
          <StarIcon className="h-4 w-4 mr-1 fill-yellow-400" />
          {movie.rating}
        </div>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            title="Buy Ticket"
            size="md"
            variant="primary"
            onClick={() => navigate(`/booking/${movie.id}`)}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeMovieCard
