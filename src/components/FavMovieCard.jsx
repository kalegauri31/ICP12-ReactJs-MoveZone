import { HeartIcon, Clock } from "lucide-react";
import { useNavigate } from "react-router";

function FavMovieCard({ movie}) {
  
  return (
    <div className="md:w-[30%] w-[90%] bg-[#234C6A]  rounded-lg shadow-lg overflow-hidden">

    <div className="h-[320px] overflow-hidden">
        <img
        src={movie.image}
        alt={movie.name}
        className="h-full w-full"
      />

    </div>
      
    </div>
  );
}

export default FavMovieCard;
