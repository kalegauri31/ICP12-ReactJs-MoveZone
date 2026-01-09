import { useEffect, useState } from "react";
import FavMovieCard from "../components/FavMovieCard";
import { HeartIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <Navbar/>
            <div className="bg-[#1B3C53] py-12 px-6 text-center my-6">
                <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                    <HeartIcon className="text-red-400" />
                    Your Favorite Movies
                </h1>
                <p className="text-gray-300 mt-4 text-lg">
                    Movies you saved to watch later
                </p>
            </div>

            {(
                <div className="flex flex-wrap gap-8 justify-center">
                    {(favMovies.length === 0 ?
                        (<p className="flex gap-5 items-center justify-center  mb-10 text-[#E3E3E3] text-3xl text-center fon">
                            No favorite movies yet <HeartIcon className="text-red-400" />
                        </p>)
                        : favMovies.map(movie => (
                            <FavMovieCard
                                key={movie.id}
                                movie={movie}
                                onRemoveFav={removeFromFav}
                            />
                        )))}
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default FavMovies;
