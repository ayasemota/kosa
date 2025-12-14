import { Heart, Sparkles, Music, Tv } from "lucide-react";

const interests = [
  { icon: Music, title: "K-Pop", desc: "Living for the beats & visuals" },
  { icon: Tv, title: "K-Dramas", desc: "Obsessed with the storylines" },
  { icon: Heart, title: "Fashion", desc: "Style is my language" },
  { icon: Sparkles, title: "Beauty", desc: "Glow up culture enthusiast" },
];

export default function Interests() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        What I Love
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300"
              tabIndex={0}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full flex items-center justify-center text-white group-hover:rotate-12 group-hover:scale-110 group-focus:rotate-12 group-focus:scale-110 transition-transform">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
