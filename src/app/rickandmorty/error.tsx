"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-br from-red-900 to-black">
      <h2 className="text-4xl font-bold mb-4">¡Algo salió mal!</h2>
      <p className="mb-6 text-gray-300">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-white text-red-700 font-bold px-6 py-3 rounded-lg hover:bg-red-200 transition"
      >
        Reintentar
      </button>
    </div>
  );
}
