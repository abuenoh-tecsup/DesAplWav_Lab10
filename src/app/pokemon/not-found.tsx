import Link from "next/link";
import { IoSearchCircleOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900 to-black text-white p-8">
      <IoSearchCircleOutline size={90} className="text-purple-400 mb-6 animate-pulse" />
      
      <h2 className="text-4xl font-bold mb-3">
        ¡Pokémon no encontrado!
      </h2>
      
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        No pudimos encontrar el Pokémon o la página que buscas. <br />
        Verifica el nombre o regresa al listado principal.
      </p>
      
      <Link
        href="/pokemon"
        className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-transform transform hover:scale-105"
      >
        Volver a la Pokédex
      </Link>
    </div>
  );
}
