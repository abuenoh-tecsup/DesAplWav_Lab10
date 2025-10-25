import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">No se encontró el personaje que buscas</p>
      <Link
        href="/rickandmorty"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
