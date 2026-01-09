import React, { useState } from "react";
import { CreditCard, User, Calendar, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentData.cardNumber.length !== 16) {
      alert("Card number must be 16 digits");
      return;
    }

    if (paymentData.cvv.length !== 3) {
      alert("CVV must be 3 digits");
      return;
    }

    alert("Payment Successful (Demo)");
    console.log(paymentData);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b3c53] to-[#234c6a] pt-20">

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl bg-[#2f4a63]/90 backdrop-blur-lg shadow-2xl p-8 text-gray-200">

          {/* Header */}
          <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
            PAYMENT
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Secure MovieZone Payment
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Card Holder */}
            <div>
              <label className="block mb-2 text-gray-300">
                Card Holder Name
              </label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={paymentData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label className="block mb-2 text-gray-300">Card Number</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <CreditCard size={18} className="text-gray-400" />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="1234567812345678"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  required
                  maxLength="16"
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Expiry */}
            <div>
              <label className="block mb-2 text-gray-300">Expiry Date</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Calendar size={18} className="text-gray-400" />
                <input
                  type="month"
                  name="expiry"
                  value={paymentData.expiry}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200"
                />
              </div>
            </div>

            {/* CVV */}
            <div>
              <label className="block mb-2 text-gray-300">CVV</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  name="cvv"
                  placeholder="***"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  required
                  maxLength="3"
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block mb-2 text-gray-300">Amount</label>
              <div className="bg-[#2b4258] rounded-xl px-4 py-3">
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  value={paymentData.amount}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#5c748c] hover:bg-[#6f8aa3] transition text-white py-3 rounded-xl font-semibold shadow-lg"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Payment;
