import { useState } from "react";

const SeatSelection = () => {
  const rows = ["A", "B", "C", "D", "E"];
  const cols = 8;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#1B3C53", color: "#E3E3E3" }}
    >
      <h1 className="text-3xl font-bold mb-6">🎟️ Select Your Seats</h1>

      {/* Screen */}
      <div
        className="w-72 h-2 rounded mb-8 text-center text-xs font-semibold"
        style={{ backgroundColor: "#E3E3E3", color: "#1B3C53" }}
      >
        SCREEN
      </div>

      {/* Seats */}
      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row} className="flex space-x-3">
            {[...Array(cols)].map((_, index) => {
              const seat = `${row}${index + 1}`;
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  className="w-10 h-10 rounded-md text-xs font-semibold transition"
                  style={{
                    backgroundColor: isSelected ? "#234C6A" : "#456882",
                    color: "#E3E3E3",
                  }}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Selected Seats */}
      <div className="mt-6 text-sm">
        Selected Seats:{" "}
        <span className="font-semibold">
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None"}
        </span>
      </div>

      {/* Book Button */}
      <button
        className="mt-6 px-6 py-2 rounded-lg font-semibold transition"
        style={{ backgroundColor: "#234C6A", color: "#E3E3E3" }}
      >
       payment
      </button>
    </div>
  );
};

export default SeatSelection;
