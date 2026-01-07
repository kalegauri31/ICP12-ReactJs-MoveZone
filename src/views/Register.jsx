import React, { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });