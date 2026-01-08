import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Clapperboard, MenuIcon, XIcon } from 'lucide-react'
import Button from "../components/Button"


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

                    <Link to="/" onClick={() => setOpen(false)} className="text-white hover:text-white">
                        Home
                    </Link>
                    <Link to="/movie" onClick={() => setOpen(false)} className="text-white hover:text-white">
                        Movie
                    </Link>
                    <Link to="/booking" onClick={() => setOpen(false)} className="text-white hover:text-white">
                        Booking
                    </Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="text-white hover:text-white">
                        About
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-5">
                    <Button
                        className=" flex items-center gap-2"
                        variant="primary"
                        title="login"
                        size="lg"
                        onClick={() => navigate("/login")}
                    />

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
