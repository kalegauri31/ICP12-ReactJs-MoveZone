import React, { useState } from "react";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
  });