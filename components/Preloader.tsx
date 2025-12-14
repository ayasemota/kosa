import { Heart, Sparkles, Star } from "lucide-react";

export default function Preloader() {
  return (
    <div className="transition-all duration-1500 fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="text-center">
        <div className="flex justify-center gap-3 mb-8">
          <Heart
            className="w-8 h-8 text-pink-500 animate-preloaderPulse"
            fill="currentColor"
            style={{ animationDelay: "0s" }}
          />
          <Sparkles
            className="w-8 h-8 text-purple-500 animate-preloaderPulse"
            style={{ animationDelay: "0.2s" }}
          />
          <Star
            className="w-8 h-8 text-blue-500 animate-preloaderPulse"
            fill="currentColor"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
          KOSA
        </h2>

        <div className="w-48 h-1 mx-auto bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
            style={{
              animation: "shimmer 1.5s infinite",
              backgroundSize: "200% 100%",
            }}
          />
        </div>

        <p className="mt-4 text-gray-600 text-sm">Loading magic ✨</p>
      </div>
    </div>
  );
}
