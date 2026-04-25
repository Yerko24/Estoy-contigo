"use client";

interface EmotionSelectorProps {
  selected: string | null;
  onSelect: (emotion: string) => void;
}

export default function EmotionSelector({
  selected,
  onSelect,
}: EmotionSelectorProps) {
  const emotions = [
    { emoji: "😞", label: "Triste" },
    { emoji: "😕", label: "Confundido" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "🙂", label: "Bien" },
    { emoji: "😄", label: "Feliz" },
  ];

  return (
    <div className="flex justify-between">
      {emotions.map((emotion) => (
        <button
          key={emotion.emoji}
          onClick={() => onSelect(emotion.emoji)}
          className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
            selected === emotion.emoji
              ? "bg-green-100 dark:bg-green-900 scale-110 shadow-md"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <span className="text-3xl mb-1">{emotion.emoji}</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {emotion.label}
          </span>
        </button>
      ))}
    </div>
  );
}
