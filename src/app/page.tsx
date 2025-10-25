import Link from "next/link";
import { IoGameController, IoPlanet, IoLogoGithub } from "react-icons/io5";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Encabezado */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center drop-shadow-lg">
        Multiverso de Personajes 🌌
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-12">
        Explora el universo de tus personajes favoritos.  
        Entra al mundo de <span className="text-yellow-400 font-semibold">Pokémon</span> o  
        viaja entre dimensiones con <span className="text-green-400 font-semibold">Rick and Morty</span>.
      </p>

      {/* Opciones principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card Pokémon */}
        <Link
          href="/pokemon"
          className="group bg-white/10 border border-yellow-400/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <IoGameController
            size={64}
            className="mx-auto mb-4 text-yellow-400 group-hover:rotate-12 transition-transform"
          />
          <h2 className="text-3xl font-bold mb-2 text-yellow-300">Pokémon</h2>
          <p className="text-gray-300">
            Descubre los Pokémon más icónicos y aprende sobre sus habilidades.
          </p>
        </Link>

        {/* Card Rick and Morty */}
        <Link
          href="/rickandmorty"
          className="group bg-white/10 border border-green-400/40 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          <IoPlanet
            size={64}
            className="mx-auto mb-4 text-green-400 group-hover:rotate-12 transition-transform"
          />
          <h2 className="text-3xl font-bold mb-2 text-green-300">
            Rick and Morty
          </h2>
          <p className="text-gray-300">
            Viaja a través del multiverso y conoce a todos los personajes.
          </p>
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm flex items-center gap-2">
        <IoLogoGithub size={20} />
        <span>
          Proyecto desarrollado con Next.js 15 y Tailwind CSS — 2025
        </span>
      </footer>
    </main>
  );
}
