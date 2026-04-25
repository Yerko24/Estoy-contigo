"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Completa todos los campos");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      router.push("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 relative overflow-hidden">
      {/* 🌿 Fondo premium */}
      <div className="absolute w-[500px] h-[500px] bg-green-300 opacity-20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-200 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🧾 Card */}
      <div className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">
        {/* 🧠 Logo + título */}
        <div className="text-center mb-8">
          <div className="bg-white p-3 rounded-full shadow-md inline-block">
            <Image src="/Estoy contigo.png" alt="logo" width={60} height={60} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Estoy contigo
          </h1>

          <p className="text-gray-500 text-sm mt-1">Tu espacio seguro 💚</p>
        </div>

        {/* 📩 Formulario */}
        <div className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Contraseña</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 outline-none transition pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              >
                {showPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {/* ERROR */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* BOTÓN */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition ${
              loading
                ? "bg-green-300"
                : "bg-green-500 hover:bg-green-600 shadow-lg"
            }`}
          >
            {loading ? "Entrando..." : "Iniciar sesión"}
          </button>

          {/* LINK */}
          <p className="text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Crear cuenta
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
