import React, { useState } from "react";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Payment</h2>

        <form onSubmit={handleSubmit}>
          {/* Card Holder Name */}
          <div className="mb-4">
            <label className="block mb-2">Card Holder Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={paymentData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentData.cardNumber}
              onChange={handleChange}
              required
              maxLength="16"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Expiry Date */}
          <div className="mb-4">
            <label className="block mb-2">Expiry Date</label>
            <input
              type="month"
              name="expiry"
              value={paymentData.expiry}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* CVV */}
          <div className="mb-4">
            <label className="block mb-2">CVV</label>
            <input
              type="password"
              name="cvv"
              placeholder="***"
              value={paymentData.cvv}
              onChange={handleChange}
              required
              maxLength="3"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Amount */}
          <div className="mb-6">
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={paymentData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;



