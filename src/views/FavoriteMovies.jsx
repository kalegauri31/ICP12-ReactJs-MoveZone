import { useEffect, useState } from "react";
import FavMovieCard from "../components/FavMovieCard";
import { HeartIcon } from "lucide-react";

function FavMovies() {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("favoriateMovies") || "[]"
    );
    setFavMovies(data);
  }, []);

   const removeFromFav = (id) => {
    const updatedFavMovies = favMovies.filter(movie => movie.id !== id);
    setFavMovies(updatedFavMovies);
    localStorage.setItem("favoriateMovies", JSON.stringify(updatedFavMovies));
  };

  return (
    <div className="min-h-screen bg-[#1B3C53] p-6">


      {(
        <div className="flex flex-wrap gap-8 justify-center">
          {(favMovies.length===0? 
          (<p className="flex gap-5 items-center justify-center p-5 mt-9 text-[#E3E3E3] text-3xl text-center fon">
              No favorite movies yet <HeartIcon fill="red"/>
          </p>)
          :favMovies.map(movie => (
            <FavMovieCard
              key={movie.id}
              movie={movie}
              onRemoveFav={removeFromFav}
            />
         ) ))}
        </div>
      )}
    </div>
  );
}

export default FavMovies;
