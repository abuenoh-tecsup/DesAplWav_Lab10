import { ReactNode } from "react";
import { Metadata } from "next";
import { IoPlanet } from "react-icons/io5";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rick and Morty - Next.js",
  description: "Explora los personajes del universo Rick and Morty",
};

interface RickAndMortyLayoutProps {
  children: ReactNode;
}

export default function RickAndMortyLayout({ children }: RickAndMortyLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <nav className="bg-black bg-opacity-40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/rickandmorty"
            className="text-2xl font-bold hover:text-green-400 transition flex items-center"
          >
            <IoPlanet size={30} className="inline-block mr-2" />
            Rick and Morty
          </Link>

          <div className="space-x-6 text-lg">
            <Link
              href="/rickandmorty"
              className="hover:text-green-400 transition"
            >
              Inicio
            </Link>
            <Link
              href="/rickandmorty/search"
              className="hover:text-green-400 transition"
            >
              Búsqueda
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}
