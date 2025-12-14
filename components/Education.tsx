import { BookOpen, Star } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white hover:shadow-pink-300 transition-all duration-300 hover:scale-105">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </div>

        <div className="space-y-4 text-lg md:text-xl">
          <p className="flex items-center gap-2">
            <Star className="w-5 h-5" fill="currentColor" />
            <span className="font-semibold">University of Benin (UNIBEN)</span>
          </p>
          <p className="flex items-center gap-2">
            <Star className="w-5 h-5" fill="currentColor" />
            <span className="font-semibold">Physiotherapy Student</span>
          </p>
          <p className="flex items-center gap-2">
            <Star className="w-5 h-5" fill="currentColor" />
            <span className="font-semibold">100 Level</span>
          </p>
        </div>

        <p className="mt-6 text-lg opacity-90">
          Studying hard, dreaming bigger! Balancing textbooks with my passions
          📚✨
        </p>
      </div>
    </section>
  );
}
