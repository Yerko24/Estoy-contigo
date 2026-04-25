"use client";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/theme-context";

export default function ProfileTab() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg text-center transition-colors duration-300">
        <div className="w-20 h-20 bg-green-100 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
          <span className="text-3xl">👤</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          Tu Perfil
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Usuario registrado</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg space-y-4 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Configuración
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <span className="text-gray-700 dark:text-gray-300">
              Notificaciones
            </span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <span className="text-gray-700 dark:text-gray-300">
              Recordatorios diarios
            </span>
            <div className="w-10 h-6 bg-green-500 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors duration-300">
            <span className="text-gray-700 dark:text-gray-300">
              Modo oscuro
            </span>
            <button
              onClick={toggleTheme}
              className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${
                theme === "dark" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-300 ${
                  theme === "dark" ? "right-1" : "left-1"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg transition-colors duration-300">
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
