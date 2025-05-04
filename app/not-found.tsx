export default function NotFound() {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">🚀 404: Lost in Space</h1>
      <p className="text-indigo-300 mb-6">The page you're looking for isn't on this planet.</p>
      <a href="/" className="bg-indigo-600 px-6 py-2 rounded text-white hover:bg-indigo-500 transition">Return to Earth</a>
    </section>
  );
}
