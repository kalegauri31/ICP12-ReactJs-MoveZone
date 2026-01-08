import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SeatSelection = () => {
  const rows = ["A", "B", "C", "D", "E"];
  const cols = 8;
  const seatPrice = 200;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seat)) {
        setTotalPrice((price) => price - seatPrice);
        return prev.filter((s) => s !== seat);
      } else {
        setTotalPrice((price) => price + seatPrice);
        return [...prev, seat];
      }
    });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main
        className="min-h-screen pt-24 pb-10 flex flex-col items-center px-3 sm:px-6"
        style={{ backgroundColor: "#1B3C53", color: "#E3E3E3" }}
      >
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          🎟️ Select Your Seats
        </h1>

        {/* Screen */}
        <div
          className="mx-auto w-44 sm:w-64 md:w-72 h-2 rounded mb-6 text-center text-[10px] font-semibold"
          style={{ backgroundColor: "#E3E3E3", color: "#1B3C53" }}
        >
          SCREEN
        </div>

        {/* Seats */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg overflow-x-auto">
          <div className="space-y-2 sm:space-y-3">
            {rows.map((row) => (
              <div key={row} className="flex justify-center gap-1.5 sm:gap-3">
                {[...Array(cols)].map((_, index) => {
                  const seat = `${row}${index + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      className="
                        flex-shrink-0
                        w-7 h-7 text-[9px]
                        sm:w-9 sm:h-9 sm:text-xs
                        md:w-10 md:h-10 md:text-sm
                        rounded-md font-semibold
                        transition-all duration-200
                      "
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
        </div>

        {/* Selected seats */}
        <div className="mt-4 text-xs sm:text-sm text-center">
          Selected Seats:{" "}
          <span className="font-semibold">
            {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 text-sm sm:text-lg font-semibold">
          Total Price: ₹{totalPrice}
        </div>

        {/* Book Button */}
        <button
          className="mt-5 px-6 py-2 rounded-lg font-semibold transition hover:scale-105"
          style={{ backgroundColor: "#234C6A", color: "#E3E3E3" }}
        >
          Pay Now
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SeatSelection;
