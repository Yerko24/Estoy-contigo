"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import InputBox from "../components/InputBox";
import Footer from "../components/Footer";
import { getBotResponse } from "../utils/chat";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Home() {
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

  // Guardar mensajes en localStorage
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

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        text: "Hola 💚 Estoy contigo. ¿Cómo te sientes hoy?",
      },
    ]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center p-4">
      <Header />

      {/* CHAT CONTAINER */}
      <div className="w-full max-w-md flex flex-col flex-1 min-h-0">
        <ChatWindow messages={messages} isTyping={isTyping} />

        {/* INPUT */}
        <InputBox
          input={input}
          setInput={setInput}
          onSend={sendMessage}
          onEmotionSelect={handleEmotionSelect}
        />
      </div>

      <Footer onClearChat={clearChat} />
    </div>
  );
}
