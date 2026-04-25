"use client";
import { useRouter } from "next/navigation";

export default function ProfileTab() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-3xl">👤</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Tu Perfil</h2>
        <p className="text-gray-600">Usuario registrado</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Configuración</h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700">Notificaciones</span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700">Recordatorios diarios</span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-700">Modo oscuro</span>
            <div className="w-10 h-6 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
