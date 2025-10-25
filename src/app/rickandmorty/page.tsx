import Link from "next/link";
import Image from "next/image";
import { CharacterListResponse } from "@/types/rickandmorty";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character", {
    next: { revalidate: 864000 }, // Revalida cada 10 días (SSG + ISR)
  });

  if (!res.ok) throw new Error("Error al cargar personajes");

  const data: CharacterListResponse = await res.json();
  return data.results;
}

export default async function RickAndMortyPage() {
  const characters = await getCharacters();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-green-400 text-left mb-8 drop-shadow-lg">
        Lista de Personajes
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {characters.map((char) => (
          <Link
            key={char.id}
            href={`/rickandmorty/${char.id}`}
            className="transform transition hover:scale-105"
          >
            <div className="bg-white text-gray-700 rounded-xl shadow-lg p-4 hover:shadow-2xl cursor-pointer">
              <Image
                width={150}
                height={150}
                src={char.image}
                alt={char.name}
                className="w-full h-64 object-cover rounded-lg"
                priority={false} // Lazy loading automático
              />
              <h2 className="text-xl font-bold text-center mt-4">
                {char.name}
              </h2>
              <p className="text-gray-500 text-center">{char.species}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
