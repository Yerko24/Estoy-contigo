"use client";

interface FooterProps {
  onClearChat: () => void;
}

export default function Footer({ onClearChat }: FooterProps) {
  return (
    <div className="w-full max-w-md mt-4 p-4 bg-white rounded-2xl shadow-lg text-center">
      <p className="text-sm text-gray-500 mb-2">
        Desarrollado con 💚 para apoyar tu bienestar emocional
      </p>
      <button
        onClick={onClearChat}
        className="text-sm text-green-600 hover:text-green-800 underline"
      >
        Nuevo chat
      </button>
    </div>
  );
}
