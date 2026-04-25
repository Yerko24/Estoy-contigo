"use client";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-4 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Estoy contigo.png"
            alt="Estoy contigo Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bienvenido de nuevo
            </p>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Hola Yerko 👋
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 md:w-auto">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              Hoy
            </p>
            <p className="mt-1 font-medium">{formattedDate}</p>
          </div>
          <button className="rounded-2xl bg-white p-3 shadow-sm shadow-gray-200/50 transition hover:bg-gray-100 dark:bg-gray-800 dark:shadow-black/20 dark:hover:bg-gray-700">
            <UserIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
