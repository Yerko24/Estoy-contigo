"use client";
import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import InputBox from "./InputBox";
import { getBotResponse } from "../utils/chat";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatTab() {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("chatMessages");
      return saved
        ? JSON.parse(saved)
        : [
            {
              role: "bot",
              text: "Hola 💚 Estoy contigo. ¿Cómo te sientes hoy?",
            },
          ];
    }
    return [
      {
        role: "bot",
        text: "Hola 💚 Estoy contigo. ¿Cómo te sientes hoy?",
      },
    ];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const botResponse = await getBotResponse(input);
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Lo siento, hubo un error. Inténtalo de nuevo." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleEmotionSelect = (emotion: string) => {
    setInput((prev) => prev + " " + emotion);
  };

  return (
    <div className="max-w-md mx-auto h-full flex flex-col">
      <ChatWindow messages={messages} isTyping={isTyping} />
      <InputBox
        input={input}
        setInput={setInput}
        onSend={sendMessage}
        onEmotionSelect={handleEmotionSelect}
      />
    </div>
  );
}
