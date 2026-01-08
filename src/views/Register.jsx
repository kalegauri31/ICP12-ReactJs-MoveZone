import React, { useState } from "react";
import { Link } from "react-router";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful");
    console.log(formData);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b3c53] to-[#234c6a] pt-20">

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl bg-[#2f4a63]/90 backdrop-blur-lg shadow-2xl p-8 text-gray-200">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <UserPlus size={26} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center tracking-wider mb-2">
            CREATE ACCOUNT
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Join MovieZone today
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">Name</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <User size={18} className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-gray-300">Password</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-transparent w-full outline-none text-gray-200 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-gray-300">Confirm Password</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
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
              Register
            </button>
          </form>

          {/* Footer text */}
          <p className="text-center text-gray-300 mt-6">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-white font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Register;

