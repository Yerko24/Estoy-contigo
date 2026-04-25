"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import HomeTab from "@/components/HomeTab";
import ChatTab from "@/components/ChatTab";
import DiaryTab from "@/components/DiaryTab";
import ToolsTab from "@/components/ToolsTab";
import ProfileTab from "@/components/ProfileTab";

const tabs = [
  { id: "home", label: "Inicio", icon: HomeIcon },
  { id: "chat", label: "Chat", icon: ChatBubbleLeftRightIcon },
  { id: "diary", label: "Diario", icon: BookOpenIcon },
  { id: "tools", label: "Herramientas", icon: WrenchScrewdriverIcon },
  { id: "profile", label: "Perfil", icon: UserIcon },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false);
  }, [router]);

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "chat":
        return <ChatTab />;
      case "diary":
        return <DiaryTab />;
      case "tools":
        return <ToolsTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return <HomeTab />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-green-50 dark:bg-gray-950 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-200 dark:border-gray-700 border-t-green-600 dark:border-t-green-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <div className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-7xl flex-col gap-6 px-4 pb-24 pt-4 md:flex-row md:items-start md:gap-8 md:px-6 lg:px-8">
        <aside className="hidden md:block md:w-64 xl:w-72">
          <div className="sticky top-4 space-y-4">
            <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-lg shadow-gray-200/40 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                Navegación
              </p>
              <div className="mt-4 space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-green-50 text-green-700 shadow-sm shadow-green-100 dark:bg-green-900/40 dark:text-green-200"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 w-full md:w-auto">{renderTab()}</main>
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
