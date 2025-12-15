"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
        }}
      />

      <div className="relative text-center z-10">
        <div className="mb-6 animate-bounce">
          <Star
            className="w-12 h-12 mx-auto text-pink-400"
            fill="currentColor"
          />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
          KOSA
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          ✨ Just a girl living her best life ✨
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <span className="px-6 py-2 bg-white rounded-full shadow-lg text-pink-500 font-semibold">
            Student
          </span>
          <span className="px-6 py-2 bg-white rounded-full shadow-lg text-blue-500 font-semibold">
            Dreamer
          </span>
          <span className="px-6 py-2 bg-white rounded-full shadow-lg text-purple-500 font-semibold">
            Trendsetter
          </span>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
      >
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center hover:border-pink-600 hover:bg-pink-50 transition-all duration-300 active:scale-95">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
