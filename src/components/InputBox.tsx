"use client";
import { useState } from "react";

interface InputBoxProps {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  onEmotionSelect?: (emotion: string) => void;
}

export default function InputBox({
  input,
  setInput,
  onSend,
  onEmotionSelect,
}: InputBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const emotions = ["😞", "😐", "🙂", "😄"];

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      {/* Selector emocional opcional */}
      {onEmotionSelect && (
        <div className="flex gap-2 mb-3 justify-center">
          {emotions.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onEmotionSelect(emoji)}
              className="text-2xl hover:scale-110 transition-transform p-2 rounded-full hover:bg-gray-100"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
      <div className="flex gap-3 items-end">
        <input
          className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 focus:border-green-300 focus:outline-none transition-colors bg-gray-50"
          placeholder="Escribe lo que sientes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onSend}
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
        >
          <span className="text-xl">➤</span>
        </button>
      </div>
    </div>
  );
}
