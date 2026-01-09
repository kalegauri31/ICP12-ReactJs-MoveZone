import React from "react";
import { useNavigate } from "react-router";
import Background from "../assets/background.webp";
import Button from "../components/Button";
import { CalendarIcon, ClockIcon } from "lucide-react";

function HeroSection() {
    const navigate = useNavigate();

    return (
        <div
            className="relative h-screen bg-cover bg-center flex items-end"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#456882] via-black/10"></div>

            <div className="relative z-10 px-6 md:px-16 lg:px-36 pb-20 max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    <span className="bg-red-600 px-2 py-1 text-sm md:text-base mr-2">
                        MARVEL
                    </span>
                    <span className="border-y-2 border-white px-2 text-sm md:text-base">
                        STUDIOS
                    </span>
                    <br />Avengers <br /> Black Panther’s Quest
                </h1>

                <div className="flex flex-wrap items-center gap-5 text-gray-300 text-sm mt-4">
                    <span>Action | Adventure | Superhero</span>

                    <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4 text-white" />
                        2024
                    </span>

                    <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4 text-white" />
                        2h 10m
                    </span>
                </div>

                <p className="text-gray-300 text-sm mt-4 mb-5 leading-relaxed">
                    When Wakanda faces a dangerous new threat, Black Panther unites with the
                    Avengers to defend his homeland and protect the world.
                </p>

                <Button
                    className="mt-2 flex items-center gap-2"
                    variant="primary"
                    title="Explore More →"
                    size="lg"
                    onClick={() => navigate("/movie")}
                />
            </div>
        </div>
    );
}

export default HeroSection;
