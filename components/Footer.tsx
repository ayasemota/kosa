import { Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <Heart
            className="w-6 h-6 text-pink-500 animate-pulse hover:scale-125 transition-transform cursor-pointer"
            fill="currentColor"
          />
          <Sparkles className="w-6 h-6 text-blue-500 animate-pulse hover:scale-125 transition-transform cursor-pointer" />
          <Heart
            className="w-6 h-6 text-pink-500 animate-pulse hover:scale-125 transition-transform cursor-pointer"
            fill="currentColor"
          />
        </div>

        <p className="text-gray-600 text-lg mb-2">
          Stay inspired, stay beautiful ✨
        </p>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Kosa. Made with 💖 by {" "}
          <Link
            href="https://github.com/ayasemota/" target="_blank"
            className="text-pink-500 animate-pulse hover:scale-125"
          >
            Favorite Brother 🤪
          </Link>
        </p>
      </div>
    </footer>
  );
}
