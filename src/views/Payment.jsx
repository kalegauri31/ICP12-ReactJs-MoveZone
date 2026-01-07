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

  