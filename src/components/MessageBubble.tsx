"use client";
import { useEffect, useRef, useState } from "react";

interface MessageBubbleProps {
  role: "user" | "bot";
  text: string;
}

export default function MessageBubble({ role, text }: MessageBubbleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    if (bubbleRef.current) {
      bubbleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      ref={bubbleRef}
      className={`flex items-start gap-3 ${
        role === "user" ? "flex-row-reverse" : ""
      }`}
    >
      {role === "bot" && (
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm">🤖</span>
        </div>
      )}
      <div
        className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } ${role === "user" ? "bg-green-200" : "bg-blue-50"}`}
      >
        {text}
      </div>
    </div>
  );
}
