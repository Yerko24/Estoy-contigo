"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error al iniciar sesión");
        return;
      }

      // Guardar sesión
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirigir al home
      router.push("/");
    } catch (err) {
      setError("Error de conexión");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* 🌿 FONDO NATURAL */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-green-100 to-white" />

      {/* 🌿 EFECTO HOJAS / MANCHAS */}
      <div className="absolute w-[600px] h-[600px] bg-green-300 opacity-20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-400 opacity-10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      <div className="absolute inset-0 opacity-10 bg-[url('/leaves.png')] bg-cover bg-center" />

      {/* 📱 CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 w-full max-w-sm">
        {/* 🧠 LOGO GRANDE */}
        <Image
          src="/Estoy contigo.png"
          alt="logo"
          width={400}
          height={400}
          className="mb-4 drop-shadow-xl"
        />

        {/* ✍️ FORMULARIO */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-lg text-center shadow-sm animate-fadeIn">
              {error}
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-3 rounded-xl font-semibold shadow-xl transition"
          >
            {loading ? "Entrando..." : "Iniciar sesión"}
          </button>
        </form>

        {/* Link a registro */}
        <p className="mt-6 text-gray-600 text-sm">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-green-600 font-semibold hover:text-green-700"
          >
            Crear cuenta
          </button>
        </p>

        {/* 🔒 SEGURIDAD */}
        <div className="mt-8 bg-white/50 backdrop-blur-md px-4 py-3 rounded-xl flex items-start gap-3 max-w-xs">
          <span className="text-green-600 text-lg">🛡️</span>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-700">
              Tu espacio seguro
            </p>
            <p className="text-xs text-gray-600">
              Todo es confidencial y está pensado para tu bienestar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
