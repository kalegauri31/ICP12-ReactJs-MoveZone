import React from 'react'
import { Link } from 'react-router'
import { Facebook, Twitter, Instagram, Youtube, Clapperboard } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#1B3C53] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <Clapperboard className="text-red-500 w-7 h-7" />
            Movie<span className="text-red-500">Zone</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Your trusted movie booking app. Secure, fast, and reliable.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#E3E3E3] transition">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-[#E3E3E3]  transition">Movies</Link>
            </li>
            <li>
              <Link to="/bookings" className="hover:text-[#E3E3E3]  transition">Bookings</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#E3E3E3] transition">About</Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-[#E3E3E3]  transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-[#E3E3E3]  transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-[#E3E3E3]  transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-[#E3E3E3] transition" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">Email: support@moviezone.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 12345 67890</p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MovieZone. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
