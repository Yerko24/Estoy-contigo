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
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} text={msg.text} />
      ))}
      {isTyping && (
        <div className="p-3 rounded-2xl max-w-[80%] text-sm bg-blue-50 self-start mr-auto shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
