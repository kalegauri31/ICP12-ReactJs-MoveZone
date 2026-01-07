import { useParams } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

function Booking() {
  const { id } = useParams();

  // ✅ FIX 1: compare as string
  const movie = movies.find(m => m.id === id);

  const [selectedTime, setSelectedTime] = useState(null);

  const timings = ["10:00 AM", "1:30 PM", "5:00 PM", "9:00 PM"];

  if (!movie) {
    return <p className="text-white">Movie not found</p>;
  }

  return (
    <div className="min-h-screen bg-[#1B3C53] text-white p-6">
      <div className="max-w-4xl mx-auto bg-[#234C6A] rounded-lg p-6 flex flex-col md:flex-row gap-6">

        {/* ✅ FIX 2: use image */}
        <img
          src={movie.image}
          alt={movie.name}
          className="w-[220px] rounded"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{movie.name}</h1>
          <p className="text-gray-300 mt-1">
            {movie.language} • {movie.type}
          </p>

          {/* Timings */}
          <h3 className="mt-6 mb-3 text-xl">Select Show Time</h3>

          <div className="flex flex-wrap gap-3">
            {timings.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded border 
                  ${
                    selectedTime === time
                      ? "bg-[#456882] border-white"
                      : "border-[#456882] text-gray-300"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Proceed */}
          <button
            disabled={!selectedTime}
            className={`mt-6 w-full py-3 rounded text-lg
              ${
                selectedTime
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;