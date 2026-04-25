"use client";

export default function ToolsTab() {
  const tools = [
    {
      title: "Respiración 4-7-8",
      description: "Inhala 4 segundos, retiene 7, exhala 8. Calma la mente.",
      icon: "🫁",
      color: "bg-blue-100 text-blue-600",
      duration: "5 min",
    },
    {
      title: "Meditación guiada",
      description: "Sesión de mindfulness para reducir el estrés.",
      icon: "🧘",
      color: "bg-green-100 text-green-600",
      duration: "10 min",
    },
    {
      title: "Afirmaciones positivas",
      description: "Frases para cultivar una mentalidad positiva.",
      icon: "✨",
      color: "bg-yellow-100 text-yellow-600",
      duration: "3 min",
    },
    {
      title: "Diario de gratitud",
      description: "Escribe 3 cosas por las que estás agradecido.",
      icon: "🙏",
      color: "bg-purple-100 text-purple-600",
      duration: "5 min",
    },
    {
      title: "Ejercicio de grounding",
      description: "Técnica 5-4-3-2-1 para volver al presente.",
      icon: "🌱",
      color: "bg-orange-100 text-orange-600",
      duration: "2 min",
    },
  ];

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Herramientas de bienestar
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center text-3xl mr-4`}
              >
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{tool.description}</p>
                <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500">
                  {tool.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
