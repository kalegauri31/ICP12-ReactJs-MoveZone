import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Clapperboard, MenuIcon, XIcon } from "lucide-react";
import Button from "../components/Button";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
            <nav className="flex items-center justify-between px-6 md:px-16 py-5">

                <Link to="/" className="flex items-center gap-2 text-white z-50">
                    <Clapperboard className="text-red-500 w-8 h-8" />
                    <span className="text-2xl font-bold tracking-wide">
                        Movie<span className="text-red-500">Zone</span>
                    </span>
                </Link>
                <div className="hidden md:flex items-center gap-15 px-20 py-4 text-white bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                    <Link to="/">Home</Link>
                    <Link to="/movie">Movie</Link>
                    <Link to="/FavoriteMovies">Liked Movies</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="hidden md:flex">
                    <Button
                        variant="primary"
                        title="login"
                        size="lg"
                        onClick={() => navigate("/login")}
                    />
                </div>

                <MenuIcon
                    onClick={() => setOpen(true)}
                    className="md:hidden w-8 h-8 text-white cursor-pointer z-50" />

                {open && (
                    <div className="fixed inset-0 bg-black/90 z-40 md:hidden">
                        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl text-white">
                            <XIcon
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 w-8 h-8 cursor-pointer" />

                            <Link onClick={() => setOpen(false)} to="/">Home</Link>
                            <Link onClick={() => setOpen(false)} to="/movie">Movie</Link>
                            <Link onClick={() => setOpen(false)} to="/FavoriteMovies">Liked Movies</Link>
                            <Link onClick={() => setOpen(false)} to="/about">About</Link>
                            <Button
                                variant="primary"
                                title="login"
                                size="lg"
                                onClick={() => {
                                    setOpen(false);
                                    navigate("/login");
                                }}
                            />
                        </div>
                    </div>
                )}

            </nav>
        </header>
    );
}

export default Navbar;
