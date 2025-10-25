'use client'

import { IoAlertCircleOutline } from "react-icons/io5";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-800 to-black text-white p-8">
      <IoAlertCircleOutline size={80} className="text-yellow-400 mb-6" />
      <h2 className="text-4xl font-bold mb-2">¡Algo salió mal!</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        No se pudo cargar la información de los Pokémon. <br />
        Intenta recargar la página o vuelve más tarde.
      </p>

      <button
        onClick={() => reset()}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-transform transform hover:scale-105"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
