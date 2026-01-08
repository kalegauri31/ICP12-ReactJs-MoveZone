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
      <Navbar />

      <main
        className="min-h-screen pt-24 pb-12 flex flex-col items-center px-4"
        style={{ backgroundColor: "#1B3C53", color: "#E3E3E3" }}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          🎟️ Select Your Seats
        </h1>

        {/* Seat Container */}
        <div className="bg-[#234C6A] p-5 rounded-xl shadow-lg">
          <div className="space-y-3">
            {rows.map((row) => (
              <div key={row} className="flex justify-center items-center gap-2">
                {[...Array(cols)].map((_, index) => {
                  const seat = `${row}${index + 1}`;
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <button
                      key={seat}
                      onClick={() => toggleSeat(seat)}
                      className="w-9 h-9 text-xs rounded-md font-semibold transition-all cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? "#1B3C53" : "#456882",
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

        {/* Selected Seats */}
        <div className="mt-5 text-sm text-center">
          Selected Seats:{" "}
          <span className="font-semibold">
            {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 text-lg font-semibold">
          Total Price: ₹{totalPrice}
        </div>

        {/* Pay Button */}
        <button
          className="mt-6 px-8 py-2 rounded-lg font-semibold transition hover:scale-105 cursor-pointer"
          style={{ backgroundColor: "#234C6A", color: "#E3E3E3" }}
        >
          Pay Now
        </button>
      </main>

      <Footer />
    </>
  );
};

export default SeatSelection;
