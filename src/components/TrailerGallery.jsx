import React, { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

const trailers = [
    {
        id: 1,
        title: "Rahu-ketu",
        video: "https://www.youtube.com/embed/JeQZW8E5TB8",
    },
    {
        id: 2,
        title: "ashoka",
        video: "https://www.youtube.com/embed/ierm8xOQQTE",
    },
    {
        id: 3,
        title: "Narsimha",
        video: "https://www.youtube.com/embed/5L2ondR6DF8",
    },
    {
        id: 4,
        title: "Border2",
        video: "https://www.youtube.com/embed/nvmc2ECk8Lo",
    },
];

export default function TrailerGallery() {
    const [activeTrailer, setActiveTrailer] = useState(trailers[0]);

    return (
        <section className="bg-[#456882] w-full py-16">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex mb-8">
                    <h2 className="text-white text-3xl font-semibold">
                        Trailer
                        <ArrowRightIcon className="inline-block h-4 w-8 ml-1" />
                    </h2>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-5xl aspect-video max-h-[420px] sm:max-h-[480px] lg:max-h-[460px]">

                        <iframe
                            key={activeTrailer.id}
                            src={activeTrailer.video}
                            title={activeTrailer.title}
                            className="w-full h-full rounded-xl shadow-2xl"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-4 flex-wrap">
                    {trailers.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => setActiveTrailer(movie)}
                            className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-transform
                ${activeTrailer.id === movie.id
                                    ? "border-blue-500 scale-105"
                                    : "border-gray-700 hover:scale-105"
                                }`}>
                            <iframe
                                src={movie.video}
                                title={movie.title}
                                className="w-44 h-28 pointer-events-none"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
