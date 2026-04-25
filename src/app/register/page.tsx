"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* 🌿 FONDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white" />

      {/* 🌿 EFECTOS */}
      <div className="absolute w-[600px] h-[600px] bg-green-300 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-400 opacity-10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* 🌳 OPCIONAL hojas */}
      <div className="absolute inset-0 opacity-10 bg-[url('/leaves.png')] bg-cover bg-center" />

      {/* 📱 CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 w-full max-w-sm">
        {/* 🧠 LOGO GRANDE */}
        <Image
          src="/Estoy contigo.png"
          alt="logo"
          width={400}
          height={400}
          className="mb-4 drop-shadow-xl"
        />

        {/* ✍️ FORM */}
        <div className="w-full space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          {/* 🔘 BOTÓN */}
          <button
            onClick={handleRegister}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-xl transition"
          >
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

          {/* 🔗 LOGIN */}
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Iniciar sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
