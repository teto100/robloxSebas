import Link from 'next/link';
import { getGuides } from '@/lib/guides';

export default function Home() {
  const guides = getGuides();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🎮 Guía de Roblox Studio para Sebas
          </h1>
          <p className="text-xl text-gray-600">
            Aprende a crear juegos increíbles paso a paso
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
            <div className="text-center mb-4">
              <span className="text-6xl">💙</span>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Hijo, sigue esta guía para que puedas aprender a programar cuando no esté, si tienes alguna duda copia y pega lo que no entiendes por Whatsapp y te contesto a penas pueda.
            </p>
            <p className="text-xl font-bold text-center mb-2">
              Te amo Sebas.
            </p>
            <p className="text-right text-lg">
              Antonio 🏴‍☠️💙
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guia/${guide.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-transparent hover:border-blue-500"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {guide.title}
              </h2>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {guide.steps.length} niveles
                </span>
                <span className="text-blue-600 font-semibold">
                  Comenzar →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📚 ¿Qué aprenderás?
            </h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <span className="text-2xl">🟢</span>
                <div>
                  <p className="font-semibold">Nivel 1</p>
                  <p className="text-sm text-gray-600">Construcción básica</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🟡</span>
                <div>
                  <p className="font-semibold">Nivel 2</p>
                  <p className="text-sm text-gray-600">Terreno y efectos</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🟠</span>
                <div>
                  <p className="font-semibold">Nivel 3</p>
                  <p className="text-sm text-gray-600">Programación Luau</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🔴</span>
                <div>
                  <p className="font-semibold">Nivel 4</p>
                  <p className="text-sm text-gray-600">Tu primer juego</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
