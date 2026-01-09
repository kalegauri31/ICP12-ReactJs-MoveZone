import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster ,toast} from "react-hot-toast";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all fields!");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem("UserInfo"));

  if (!storedUser) {
    toast.error("No account found. Please register first.");
    return;
  }

  if (email !== storedUser.email || password !== storedUser.password) {
    toast.error("Invalid email or password");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  toast.success("Login Successful 🎉");
};

  return (
    <>

      <Navbar />

      <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-[#1b3c53] to-[#234c6a]">
        <div className="w-full max-w-md mx-5 my-17 rounded-2xl bg-[#2f4a63]/90 backdrop-blur-lg shadow-2xl p-8 text-gray-200">

          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <LogIn size={28} />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-2">
            WELCOME BACK
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Sign in to your MovieZone account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Mail size={18} className="text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-transparent w-full outline-none text-gray-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Password</label>
              <div className="flex items-center gap-3 bg-[#2b4258] rounded-xl px-4 py-3">
                <Lock size={18} className="text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-transparent w-full outline-none text-gray-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5c748c] hover:bg-[#6f8aa3] transition py-3 rounded-xl font-semibold cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-gray-300">
            Don’t have an account?
            <Link
              to="/register"
              className="ml-2 text-white font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
<Toaster/>
      <Footer />
    </>
  );
};

export default Login;
