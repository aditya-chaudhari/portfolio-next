export default function Interests() {
  const interests = [
    { name: "Quantum Computing", description: "Exploring how quantum algorithms can revolutionize data processing and encryption.", icon: "⚛️" },
    { name: "Neuroscience", description: "Understanding the human brain's mechanics and how it can inspire AI models.", icon: "🧠" },
    { name: "Space Exploration", description: "Following the latest advancements in space technology and imagining the future of human life beyond Earth.", icon: "🪐" },
    { name: "Psychology", description: "Studying human behavior and cognitive processes, with a focus on AI’s role in decision-making.", icon: "📘" }
  ];

  return (
    <section id="interests" className="text-white py-20 bg-gradient-to-b from-black to-indigo-900 px-6">
      <h2 className="text-4xl font-semibold text-center mb-10 text-indigo-200">🔭 Interests & Passions</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {interests.map((item, i) => (
          <div key={i} className="bg-indigo-800/20 p-6 rounded-xl border border-indigo-500 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-indigo-100">
              <span className="text-2xl">{item.icon}</span> {item.name}
            </h3>
            <p className="text-indigo-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  