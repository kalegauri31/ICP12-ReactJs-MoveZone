import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies.js";
import Button from './../components/Button.jsx';

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();   
  const movie = movies.find(m => m.id === id);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const timings = ["9:00 AM", "12:00 PM", "3:00 PM", "8:00 PM"];
  const dates = ["Today","Tomorrow","DayAfter"];

  if (!movie) {
    return <p className="text-white">Movie not found</p>;
  }

  return (
    <div className="min-h-screen bg-[#1B3C53] text-white p-6">
      <div className="max-w-4xl mx-auto bg-[#234C6A] rounded-lg p-6 flex flex-col md:flex-row gap-6">

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
          <p className="text-gray-300 mt-1">duration - {movie.duration}</p>


          <h3 className="mt-3 mb-3 text-xl font-bold">Select Show Date</h3>

          <div className="flex flex-wrap gap-3">
            {dates.map(date => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-2 py-1 rounded border 
                  ${
                    selectedDate === date
                      ? "bg-[#456882] border-white"
                      : "border-[#456882] text-gray-300"
                  }`}
              >
                {date}
              </button>
            ))}
          </div>
          

          <h3 className="mt-2 mb-3 text-xl font-bold">Select Show Time</h3>

          <div className="flex flex-wrap gap-3">
            {timings.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-1 rounded border 
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

          <div className="my-4">
            <Button className=""
              title="Proceed"
              variant="primary"
              size="md"
              onClick={() => {
                if (!selectedDate) {
                  alert("Please select show Date");
                  return;
                }
                if (!selectedTime) {
                  alert("Please select show Timing");
                  return;
                }
                navigate("/Seatselection");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
