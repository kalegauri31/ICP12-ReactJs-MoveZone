import { useEffect, useState } from "react";
import FavMovieCard from "../components/FavMovieCard";

function FavMovies() {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("favoriateMovies") || "[]"
    );
    setFavMovies(data);
  }, []);

  

  return (
    <div className="min-h-screen bg-[#1B3C53] p-6">


      {(
        <div className="flex flex-wrap gap-8 justify-center">
          {favMovies.map(movie => (
            <FavMovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavMovies;
