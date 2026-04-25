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
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 mt-4">
      {/* Selector emocional opcional */}
      {onEmotionSelect && (
        <div className="flex gap-2 mb-3">
          {emotions.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onEmotionSelect(emoji)}
              className="text-2xl hover:scale-110 transition-transform"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        <input
          className="flex-1 p-3 rounded-xl border border-gray-200 outline-none focus:border-green-300 transition-colors"
          placeholder="Escribe lo que sientes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onSend}
          className="bg-green-400 hover:bg-green-500 text-white px-4 py-3 rounded-xl transition-colors"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
