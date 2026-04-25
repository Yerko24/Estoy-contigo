"use client";
import { useState } from "react";
import EmotionSelector from "@/components/EmotionSelector";

export default function HomeTab() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const tools = [
    {
      title: "Respiración",
      description: "Relaja tu cuerpo con un ejercicio guiado.",
      icon: "🫁",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Diario",
      description: "Registra tus pensamientos y emociones.",
      icon: "📖",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Meditación",
      description: "Encuentra calma con una breve práctica.",
      icon: "🧘",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Música relajante",
      description: "Escucha sonidos suaves para reconectar.",
      icon: "🎧",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const quote = "Respira hondo. Todo está bien. Tú estás bien.";
  const streak = 4;

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <section className="lg:col-span-8 space-y-6">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                Bienestar emocional
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-gray-900 dark:text-white sm:text-5xl">
                Hola, ¿cómo te sientes hoy?
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                Este es tu espacio para respirar, reflexionar y reconectar con calma.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-3xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700 shadow-lg shadow-green-200/50 dark:shadow-black/20">
              Hablar con alguien
            </button>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-gray-100 bg-gradient-to-br from-green-50 via-white to-green-100 p-6 shadow-inner shadow-green-100/50 transition-colors duration-300 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Selecciona tu estado actual</p>
            <div className="mt-6">
              <EmotionSelector
                selected={selectedEmotion}
                onSelect={setSelectedEmotion}
              />
            </div>
            <div className="mt-6 rounded-3xl bg-white/90 px-5 py-4 text-base text-gray-800 shadow-sm shadow-gray-200/40 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/10">
              {selectedEmotion ? (
                <>Has elegido {selectedEmotion}. Aquí tienes recomendaciones personalizadas.</>
              ) : (
                <>Selecciona una emoción para recibir prácticas suaves hechas para ti.</>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                Herramientas para ti
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
                Prácticas suaves
              </h2>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">4 opciones</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <button
                key={index}
                className="group rounded-[1.75rem] border border-transparent bg-gray-50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white hover:shadow-lg hover:shadow-green-100/40 dark:bg-gray-800 dark:hover:border-green-700 dark:hover:bg-gray-700 dark:hover:shadow-black/20"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${tool.color}`}>
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <aside className="lg:col-span-4 space-y-6">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
            Tu progreso
          </p>
          <div className="mt-6 space-y-5">
            <div className="rounded-3xl bg-gray-50 p-5 shadow-sm transition-colors duration-300 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Racha actual</p>
              <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">{streak} días</p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5 shadow-sm transition-colors duration-300 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">Frase del día</p>
              <p className="mt-3 text-base text-gray-900 dark:text-gray-100">
                {quote}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
