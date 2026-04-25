"use client";
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Inicio", icon: HomeIcon },
    { id: "chat", label: "Chat", icon: ChatBubbleLeftRightIcon },
    { id: "diary", label: "Diario", icon: BookOpenIcon },
    { id: "tools", label: "Herramientas", icon: WrenchScrewdriverIcon },
    { id: "profile", label: "Perfil", icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 px-4 py-2 transition-colors duration-300">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-2 rounded-xl transition-colors duration-300 ${
                isActive
                  ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-gray-700"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
