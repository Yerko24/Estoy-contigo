"use client";
import { useState } from "react";

export default function DiaryTab() {
  const [entry, setEntry] = useState("");

  const saveEntry = () => {
    // Simular guardar
    alert("Entrada guardada");
    setEntry("");
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Diario personal
        </h2>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Escribe tus pensamientos, emociones o experiencias del día..."
          className="w-full h-40 p-4 rounded-2xl border border-gray-200 dark:border-gray-600 focus:border-green-300 dark:focus:border-green-500 focus:outline-none resize-none bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
        />
        <button
          onClick={saveEntry}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors shadow-lg"
        >
          Guardar entrada
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Entradas recientes
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Hace 2 días
            </p>
            <p className="text-gray-800 dark:text-gray-100">
              Hoy tuve una conversación difícil pero aprendí mucho sobre
              comunicación.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Hace 5 días
            </p>
            <p className="text-gray-800 dark:text-gray-100">
              Me siento agradecido por los pequeños momentos de paz en el día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
