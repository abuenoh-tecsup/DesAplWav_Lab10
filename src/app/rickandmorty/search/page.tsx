// app/rickandmorty/search/page.tsx
import SearchClient from "@/components/rickandmorty/SearchClient";
import Link from "next/link";

export const metadata = {
  title: "Buscar - Rick and Morty",
  description: "Búsqueda en tiempo real de personajes por name, status, type y gender",
};

export default function SearchPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-green-300">Buscar personajes</h1>
        <Link
          href="/rickandmorty"
          className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded"
        >
          Volver al listado
        </Link>
      </div>

      <div className="bg-white/5 p-6 rounded-lg shadow-md">
        <SearchClient />
      </div>
    </div>
  );
}
