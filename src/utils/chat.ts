// Función para simular respuesta del bot (preparada para API de IA)
export async function getBotResponse(userMessage: string): Promise<string> {
  // Simular delay de API
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 2000),
  );

  // Respuestas empáticas simples (puedes reemplazar con llamada real a API)
  const responses = [
    "Entiendo cómo te sientes. Estoy aquí para escucharte. 💚",
    "Gracias por compartir eso conmigo. ¿Quieres hablar más al respecto?",
    "Es normal sentirse así a veces. Recuerda que no estás solo.",
    "Aprecio tu confianza. ¿Hay algo específico que te gustaría que haga?",
    "Estoy contigo en esto. ¿Cómo puedo apoyarte hoy?",
  ];

  // Seleccionar respuesta aleatoria
  return responses[Math.floor(Math.random() * responses.length)];
}
