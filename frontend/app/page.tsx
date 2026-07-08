export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-cyan-400">
          SupportAgent AI
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Autonomous AI Customer Support Platform
        </p>

        <button className="mt-8 px-8 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600">
          Get Started
        </button>
      </div>
    </main>
  );
}