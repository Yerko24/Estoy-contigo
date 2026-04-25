"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import BottomNav from "@/components/BottomNav";
import HomeTab from "@/components/HomeTab";
import ChatTab from "@/components/ChatTab";
import DiaryTab from "@/components/DiaryTab";
import ToolsTab from "@/components/ToolsTab";
import ProfileTab from "@/components/ProfileTab";

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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Header />
      <main className="flex-1 p-4 pb-20 max-w-md mx-auto w-full">
        {renderTab()}
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
