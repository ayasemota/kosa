import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-all duration-300 hover:shadow-pink-200">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Hey there! I&apos;m <span className="font-bold text-pink-500">Kosa</span>,
          a 17-year-old with big dreams and even bigger ambitions. I&apos;m all about
          living life colorfully, staying inspired, and never settling for
          ordinary.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Whether it&apos;s vibing to K-pop, binge-watching K-dramas, or expressing
          myself through fashion, I&apos;m constantly exploring what makes me{" "}
          <span className="font-bold text-blue-500">uniquely me</span>. Life&apos;s
          too short to be boring! 💖
        </p>
      </div>
    </section>
  );
}
