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

   const removeFromFav = (id) => {
    const updatedFavMovies = favMovies.filter(movie => movie.id !== id);
    setFavMovies(updatedFavMovies);
    localStorage.setItem("favoriateMovies", JSON.stringify(updatedFavMovies));
  };

  return (
    <div className="min-h-screen bg-[#1B3C53] p-6">


      {(
        <div className="flex flex-wrap gap-8 justify-center">
          {favMovies.map(movie => (
            <FavMovieCard
              key={movie.id}
              movie={movie}
              onRemoveFav={removeFromFav}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavMovies;
