"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import HomeTab from "../components/HomeTab";
import ChatTab from "../components/ChatTab";
import DiaryTab from "../components/DiaryTab";
import ToolsTab from "../components/ToolsTab";
import ProfileTab from "../components/ProfileTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      <Header />
      <main className="flex-1 p-4 pb-20">{renderTab()}</main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
