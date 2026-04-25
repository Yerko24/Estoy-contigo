"use client";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Estoy contigo.png"
            alt="Estoy contigo Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-700">Estoy contigo</h1>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <UserIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
