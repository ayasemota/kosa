const quotes = [
  "Dream big, sparkle more ✨",
  "Living life in full color 🎨",
  "Confidence is my best accessory 💅",
  "Creating my own character energy 🌟",
];

export default function Quotes() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
        My Mantra
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center cursor-pointer hover:bg-gradient-to-br hover:from-pink-50 active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300 text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:bg-clip-text"
            tabIndex={0}
          >
            <p className="text-xl md:text-2xl font-bold">{quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
