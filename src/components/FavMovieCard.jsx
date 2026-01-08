import { HeartIcon, Dot, Clock} from "lucide-react";
import { useNavigate } from "react-router";

function FavMovieCard({ movie}) {
  
  return (
    <div className="md:w-[30%] w-[90%] bg-[#234C6A]  rounded-lg shadow-lg overflow-hidden">

    <div className="h-[320px] overflow-hidden">
        <img
        src={movie.image}
        alt={movie.name}
        className="h-full w-full "
      />
    </div>
      <div className="p-5 text-[#E3E3E3] flex flex-col gap-3">

        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{movie.name}</h2>
          <HeartIcon
            fill="white"
            className="cursor-pointer"
            onClick={() => {}}
          />
        </div>
        <p className="text-gray-400 text-sm flex gap-2 items-center  ">
          {movie.language} <span className="flex items-center gap-0"> <Dot/> {movie.type}</span>
        </p>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={16} /> {movie.duration}
        </div>
        </div>
    </div>
  );
}

export default FavMovieCard;
