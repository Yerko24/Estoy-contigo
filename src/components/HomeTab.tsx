"use client";
import { useState } from "react";
import EmotionSelector from "./EmotionSelector";

export default function HomeTab() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const tools = [
    {
      title: "Respiración",
      description: "Calma la mente con un ejercicio guiado.",
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
      description: "Sesión breve para reencontrarte.",
      icon: "🧘",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Música relajante",
      description: "Escucha sonidos suaves para concentrarte.",
      icon: "🎧",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Chat IA",
      description: "Habla con tu acompañante virtual.",
      icon: "💬",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const recentEntries = [
    { date: "Hoy", text: "Me sentí ansioso por la mañana", emotion: "😞" },
    { date: "Ayer", text: "Día productivo en el trabajo", emotion: "🙂" },
    {
      date: "Hace 2 días",
      text: "Conversación difícil con un amigo",
      emotion: "😕",
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <section className="space-y-6 lg:col-span-4">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Tu estado
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                ¿Cómo te sientes hoy?
              </h2>
            </div>
            <span className="rounded-2xl bg-green-50 px-3 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-200">
              En calma
            </span>
          </div>

          <div className="mt-6">
            <EmotionSelector
              selected={selectedEmotion}
              onSelect={setSelectedEmotion}
            />
          </div>

          {selectedEmotion && (
            <div className="mt-6 rounded-3xl bg-gray-50 p-4 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-300">
              Gracias por compartir cómo te sientes. {selectedEmotion}
            </div>
          )}
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Racha de días
            </p>
            <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
              4 días
            </p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-5 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Frase del día
            </p>
            <p className="mt-3 text-base font-medium text-gray-900 dark:text-gray-100">
              “Respira. Todo está bien. Estás evolucionando.”
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 lg:col-span-5">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Herramientas
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Explora tu bienestar
              </h2>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              5 módulos
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <button
                key={index}
                className="group rounded-[1.75rem] border border-transparent bg-gray-50 p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-green-200 hover:bg-green-50/60 dark:bg-gray-800 dark:hover:border-green-700 dark:hover:bg-gray-700"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${tool.color}`}
                >
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-5">
            Resumen reciente
          </h3>
          <div className="space-y-4">
            {recentEntries.map((entry, index) => (
              <div
                key={index}
                className="rounded-3xl bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{entry.emotion}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {entry.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {entry.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-6 lg:col-span-3">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
            Widgets rápidos
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Resumen emocional semanal
              </p>
              <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                +72%
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Próximo recordatorio
              </p>
              <p className="mt-3 text-base font-medium text-gray-900 dark:text-gray-100">
                Toma una pausa de respiración a las 18:30
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nivel de energía
              </p>
              <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Moderado
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
