"use client";

import { useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const vibeImages = [
  {
    id: 1,
    url: "image (1).jpeg",
    alt: "Aesthetic me",
  },
  {
    id: 2,
    url: "image (2).jpeg",
    alt: "K-pop idol portrait",
  },
  {
    id: 3,
    url: "image (3).jpeg",
    alt: "K-beauty makeup look",
  },
  {
    id: 4,
    url: "image (4).jpeg",
    alt: "Korean fashion street style",
  },
  {
    id: 5,
    url: "image (5).jpeg",
    alt: "K-drama aesthetic cafe scene",
  },
  {
    id: 6,
    url: "image (6).jpeg",
    alt: "K-pop concert vibes",
  },
  {
    id: 7,
    url: "image (7).jpeg",
    alt: "Beauty flatlay cosmetics",
  },
  {
    id: 8,
    url: "image (8).jpeg",
    alt: "Aesthetic me",
  },
];


export default function Gallery() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isFlipped = (id: number) => flippedCards.has(id);

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        My Vibe
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vibeImages.map((item) => {
          const IconComponent =
            item.id % 3 === 0 ? Heart : item.id % 3 === 1 ? Sparkles : Star;
          const isHovered = hoveredCard === item.id;
          const isCardFlipped = isFlipped(item.id);

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`aspect-square rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden relative group focus:outline-none active:scale-95 hover:ring-4
                ${
                  item.id % 2 === 0
                    ? "hover:ring-pink-400"
                    : "hover:ring-blue-500"
                }`}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(item.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                  item.id % 2 === 0
                    ? "from-pink-500 to-pink-300"
                    : "from-blue-500 to-blue-300"
                } ${isHovered || isCardFlipped ? "opacity-0" : "opacity-100"}`}
              />

              <div
                className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${
                  isHovered || isCardFlipped ? "opacity-0" : "opacity-100"
                }`}
              >
                <IconComponent
                  className="w-16 h-16 drop-shadow-lg"
                  fill={
                    item.id % 3 === 0 || item.id % 3 === 2
                      ? "currentColor"
                      : "none"
                  }
                />
              </div>

              <img
                src={item.url}
                alt={item.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  isCardFlipped
                    ? "opacity-100 scale-100"
                    : isHovered
                    ? "opacity-50 scale-105"
                    : "opacity-0 scale-110"
                }`}
              />

              {isHovered && !isCardFlipped && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
