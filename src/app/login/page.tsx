"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 via-green-50 to-white">
      {/* 📱 CONTENEDOR */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* 🌿 HEADER VISUAL */}
        <div className="relative h-64 bg-gradient-to-b from-green-200 to-green-100 flex flex-col items-center justify-center">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 w-full h-24 bg-green-300 rounded-t-[50%]" />
          </div>

          {/* Logo */}
          <Image
            src="/Estoy contigo.png"
            alt="logo"
            width={90}
            height={90}
            className="z-10"
          />

          <h1 className="text-2xl font-bold text-gray-800 mt-4 z-10">
            Estoy contigo
          </h1>

          <p className="text-green-700 text-sm z-10">
            Aquí para escucharte, aquí para ti 💚
          </p>
        </div>

        {/* 🔐 CONTENIDO */}
        <div className="p-6">
          {/* BOTONES */}
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-md transition"
          >
            {loading ? "Entrando..." : "Iniciar sesión"}
          </button>

          <button
            onClick={() => router.push("/register")}
            className="w-full mt-3 border border-green-500 text-green-600 py-3 rounded-xl font-medium hover:bg-green-50 transition"
          >
            Crear cuenta
          </button>

          {/* 🔒 SEGURIDAD */}
          <div className="mt-6 bg-green-50 rounded-xl p-4 flex gap-3 items-start">
            <div className="text-green-600 text-xl">🛡️</div>

            <div>
              <p className="font-semibold text-gray-700 text-sm">
                Tu espacio seguro
              </p>
              <p className="text-gray-500 text-xs">
                Todo lo que hablas es confidencial y está pensado para tu
                bienestar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
