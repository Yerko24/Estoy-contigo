"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

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
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* 🌿 FONDO NATURAL */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white" />

      {/* 🌿 EFECTO HOJAS / MANCHAS */}
      <div className="absolute w-[600px] h-[600px] bg-green-300 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-400 opacity-10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* 🌳 (opcional) overlay tipo naturaleza */}
      <div className="absolute inset-0 opacity-10 bg-[url('/leaves.png')] bg-cover bg-center" />

      {/* 📱 CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 -mt-10">
        {/* 🧠 LOGO GRANDE */}
        <Image
          src="/Estoy contigo.png"
          alt="logo"
          width={400}
          height={400}
          className="mb-6"
        />

        {/* BOTONES */}
        <div className="w-full max-w-xs mt-10 space-y-4">
          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-xl transition"
          >
            {loading ? "Entrando..." : "Iniciar sesión"}
          </button>

          <button
            onClick={() => router.push("/register")}
            className="w-full border border-green-500 text-green-700 py-3 rounded-xl font-medium hover:bg-green-50 transition"
          >
            Crear cuenta
          </button>
        </div>

        {/* 🔒 SEGURIDAD */}
        <div className="mt-8 bg-white/50 backdrop-blur-md px-4 py-3 rounded-xl flex items-start gap-3 max-w-xs">
          <span className="text-green-600 text-lg">🛡️</span>

          <div className="text-left">
            <p className="text-sm font-semibold text-gray-700">
              Tu espacio seguro
            </p>
            <p className="text-xs text-gray-600">
              Todo lo que hablas es confidencial y está pensado para tu
              bienestar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
