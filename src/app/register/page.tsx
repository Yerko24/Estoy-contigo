"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    // Simular registro
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-100 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/Estoy contigo.png"
            alt="Estoy contigo Logo"
            width={60}
            height={60}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Estoy contigo
          </h1>
          <p className="text-gray-600">Únete a tu compañero emocional</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-green-300 focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-green-300 focus:outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-green-300 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors shadow-lg"
          >
            Crear cuenta
          </button>

          <div className="text-center">
            <a
              href="/login"
              className="text-green-600 hover:text-green-700 text-sm"
            >
              ¿Ya tienes cuenta? Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
