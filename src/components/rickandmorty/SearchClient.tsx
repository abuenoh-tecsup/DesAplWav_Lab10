"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Character } from "@/types/rickandmorty";

export default function SearchClient() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // si no hay ningún filtro, no buscar nada
    if (!name && !status && !type && !gender) {
      setCharacters([]);
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (name) params.append("name", name);
        if (status) params.append("status", status);
        if (type) params.append("type", type);
        if (gender) params.append("gender", gender);

        const res = await fetch(`https://rickandmortyapi.com/api/character/?${params.toString()}`);
        const data = await res.json();
        setCharacters(data.results || []);
      } catch {
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchCharacters, 500); // debounce
    return () => clearTimeout(timeout);
  }, [name, status, type, gender]);

  return (
    <div className="mt-12 text-white">
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="bg-white/10 border border-purple-500 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="bg-white/10 border border-purple-500 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Estado</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          className="bg-white/10 border border-purple-500 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Género</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        <input
          type="text"
          placeholder="Tipo..."
          className="bg-white/10 border border-purple-500 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      {loading && <p className="text-center text-gray-400 mt-4">Cargando...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {characters.map((char) => (
          <Link
            key={char.id}
            href={`/rickandmorty/${char.id}`}
            className="bg-white/10 rounded-lg shadow-lg p-4 hover:scale-105 transition transform"
          >
            <Image
              width={150}
              height={150}
              src={char.image}
              alt={char.name}
              className="rounded-lg w-full h-64 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mt-3 text-center">{char.name}</h3>
            <p className="text-center text-gray-300 text-sm">
              {char.status} • {char.gender}
            </p>
          </Link>
        ))}
      </div>

      {!loading && characters.length === 0 && (name || status || type || gender) && (
        <p className="text-center text-gray-400 mt-8">No se encontraron personajes.</p>
      )}
    </div>
  );
}
