"use client";
import MessageBubble from "./MessageBubble";

interface Message {
  role: "user" | "bot";
  text: string;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
}

export default function ChatWindow({ messages, isTyping }: ChatWindowProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-green-50 dark:bg-gray-950 transition-colors duration-300">
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} text={msg.text} />
      ))}
      {isTyping && (
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-green-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
            <span className="text-sm">🤖</span>
          </div>
          <div className="p-3 rounded-2xl max-w-[80%] text-sm bg-blue-50 dark:bg-gray-700 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
