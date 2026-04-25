"use client";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full max-w-md flex items-center justify-center mb-6">
      <div className="flex items-center gap-3">
        <Image
          src="/Estoy contigo.png"
          alt="Estoy contigo Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold text-gray-700">Estoy contigo</h1>
      </div>
    </div>
  );
}
