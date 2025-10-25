import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface CharacterPageProps {
  params: Promise<{ id: string }>;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
}

async function getCharacter(id: string): Promise<Character> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    next: { revalidate: 864000 }, // 10 días
  });

  if (!res.ok) throw new Error("Personaje no encontrado");
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return data.results.map((char: Character) => ({
    id: char.id.toString(),
  }));
}

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
  const { id } = await params;
  const character = await getCharacter(id);

  return {
    title: `${character.name} - Rick and Morty`,
    description: `Detalles sobre ${character.name}`,
  };
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const character = await getCharacter(id);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-700 to-blue-500 p-8 text-center text-white">
          <h1 className="text-5xl font-bold">{character.name}</h1>
          <p className="text-xl mt-2">#{character.id}</p>
        </div>

        <div className="p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={character.image}
              alt={character.name}
              width={250}
              height={250}
              className="rounded-xl"
              priority={false}
            />
          </div>

          <div className="flex-1 text-gray-800">
            <h3 className="text-2xl font-bold mb-3">Información</h3>
            <ul className="space-y-2">
              <li><strong>Estado:</strong> {character.status}</li>
              <li><strong>Especie:</strong> {character.species}</li>
              <li><strong>Tipo:</strong> {character.type || "—"}</li>
              <li><strong>Género:</strong> {character.gender}</li>
              <li><strong>Origen:</strong> {character.origin.name}</li>
              <li><strong>Ubicación:</strong> {character.location.name}</li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-gray-50 text-center">
          <Link
            href="/rickandmorty"
            className="inline-block bg-black hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ← Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
