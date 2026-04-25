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
      className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-sm transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${
        role === "user"
          ? "bg-green-200 self-end ml-auto"
          : "bg-blue-50 self-start mr-auto"
      }`}
    >
      {text}
    </div>
  );
}
