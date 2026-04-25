"use client";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/Estoy contigo.png"
            alt="Estoy contigo Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Estoy contigo
          </h1>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
          <UserIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </header>
  );
}
