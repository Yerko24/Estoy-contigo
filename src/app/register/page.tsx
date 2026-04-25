"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error al registrarse");
        return;
      }

      setSuccess("¡Cuenta creada exitosamente!");

      // Redirigir al login después de 1.5 segundos
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      setError("Error de conexión");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 w-full max-w-sm">
        {/* 🧠 LOGO GRANDE */}
        <Image
          src="/Estoy contigo.png"
          alt="logo"
          width={400}
          height={400}
          className="mb-4 drop-shadow-xl"
        />
        {/* ✍️ FORM */}
        <form onSubmit={handleRegister} className="w-full space-y-4">
          {error && (
            <div className="w-full bg-red-50/80 backdrop-blur-md border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm text-center shadow-sm animate-fadeIn">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
              {success}
            </div>
          )}

          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-green-300 outline-none"
          />

          <input
            type="password"
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition shadow-sm"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 backdrop-blur-md border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          />

          {/* 🔘 BOTÓN */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-3 rounded-xl font-semibold shadow-xl transition"
          >
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

          {/* 🔗 LOGIN */}
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-green-600 font-semibold hover:text-green-700"
            >
              Iniciar sesión
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
