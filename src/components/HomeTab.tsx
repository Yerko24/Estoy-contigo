"use client";
import { useState } from "react";
import EmotionSelector from "./EmotionSelector";

export default function HomeTab() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const tools = [
    {
      title: "Respiración 4-7-8",
      description: "Técnica para calmar la mente",
      icon: "🫁",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Reflexión diaria",
      description: "Escribe tus pensamientos",
      icon: "📝",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Diario personal",
      description: "Registra tus emociones",
      icon: "📖",
      color: "bg-purple-100 text-purple-600",
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
    <div className="max-w-md mx-auto space-y-6">
      {/* Estado emocional */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          ¿Cómo te sientes hoy?
        </h2>
        <EmotionSelector
          selected={selectedEmotion}
          onSelect={setSelectedEmotion}
        />
        {selectedEmotion && (
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Gracias por compartir cómo te sientes. {selectedEmotion}
          </p>
        )}
      </div>

      {/* Herramientas */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Herramientas
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center text-2xl mr-4`}
              >
                {tool.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-100">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historial reciente */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Historial reciente
        </h2>
        <div className="space-y-3">
          {recentEntries.map((entry, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300"
            >
              <span className="text-2xl mr-3">{entry.emotion}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-gray-100">
                  {entry.text}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {entry.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
