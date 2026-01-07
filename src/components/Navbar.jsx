import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Clapperboard, MenuIcon, SearchIcon, XIcon } from 'lucide-react'

function Navbar() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
            <nav className="flex items-center justify-between px-6 md:px-16 py-5">


                <Link to="/" className="flex items-center gap-2 text-white">
                    <Clapperboard className="text-red-500 w-8 h-8" />
                    <span className="text-2xl font-bold tracking-wide">
                        Movie<span className="text-red-500">Zone</span>
                    </span>
                </Link>

                <div
                    className={`fixed md:static top-0 left-0 z-40 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full md:w-auto h-screen md:h-auto
                      px-6 md:px-10 py-5 font-medium text-lg md:text-base bg-black/70 md:bg-white/10 backdrop-blur-xl border md:border border-gray-300/20 md:rounded-full
                      transition-transform duration-300
                      ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
                >

                    <XIcon
                        onClick={() => setOpen(false)}
                        className="md:hidden w-8 h-8 text-white cursor-pointer absolute top-6 right-6"
                    />

                    <Link to="/" onClick={() => setOpen(false)} className="text-white hover:text-[#1B3C53]">
                        Home
                    </Link>
                    <Link to="/movies" onClick={() => setOpen(false)} className="text-white hover:text-[#1B3C53]">
                        Movies
                    </Link>
                    <Link to="/bookings" onClick={() => setOpen(false)} className="text-white hover:text-[#1B3C53]">
                        Bookings
                    </Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="text-white hover:text-[#1B3C53]">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-5">
                    <SearchIcon className="hidden md:block w-6 h-6 text-white hover:text-[#234C6A] cursor-pointer" />

                    <button
                        onClick={() => navigate('/login')}
                        className="border border-white-600 hidden sm:block px-5 py-2 bg-[#1B3C53] hover:bg-[#234C6A] text-white rounded-full"
                    >
                        Login
                    </button>

                    <MenuIcon
                        onClick={() => setOpen(true)}
                        className="md:hidden w-8 h-8 text-white cursor-pointer"
                    />
                </div>

            </nav>
        </header>
    )
}

export default Navbar
