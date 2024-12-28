"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Send } from "lucide-react";

// Definimos la interfaz para los mensajes
interface Message {
  text: string;
  sender: "user" | "system";
}

export default function Dialogo() {
  // Estado para gestionar las interacciones
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]); // Almacena los mensajes de la conversación
  const [isSendEnabled, setIsSendEnabled] = useState(true); // Habilita/deshabilita el botón "Enviar"
  const [interactionCount, setInteractionCount] = useState(0); // Cuenta las interacciones

  // Enviar el primer mensaje automático al cargar la página
  useEffect(() => {
    const initialSystemMessage =
      "- Apreciamos tu interés, pero nos gustaría entender cómo podemos colaborar a largo plazo y qué valores compartimos.";
    setMessages([{ text: initialSystemMessage, sender: "system" }]);
  }, []);

  // Función para manejar el mensaje del usuario y generar el mensaje automático
  const handleSendMessage = () => {
    if (message.trim() === "") return; // No enviar si el mensaje está vacío

    // Añadir mensaje del usuario a la lista de mensajes
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" }, // El mensaje del usuario
    ]);

    // Limitar a 5 interacciones
    if (interactionCount < 4) {
      // Generar mensaje automático (por ejemplo, el socio internacional)
      const autoMessage = `- Apreciamos tu interés, pero nos gustaría entender cómo podemos colaborar a largo plazo y qué valores compartimos.`;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: autoMessage, sender: "system" }, // El mensaje del sistema
      ]);

      // Incrementar el contador de interacciones
      setInteractionCount(interactionCount + 1);
    } else {
      // Después de 5 interacciones, deshabilitar el botón de enviar
      setIsSendEnabled(false);
    }

    // Limpiar el input
    setMessage("");
  };

  return (
    <div className="px-10">
      <div className="py-10 text-center">
        <div className="mt-10 flex items-center justify-between px-8">
          <h2 className="mb-4 flex-1 text-center text-2xl font-semibold text-blue-400">
            ENCUESTA DE SATISFACCIÓN DEL CLIENTE HOTEL SANTA TERESA
          </h2>
        </div>

        <div className="card shadow-xl">
          <div className="card-body">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="px-8 text-justify text-lg">
                Estás negociando un acuerdo con un socio internacional de una
                cultura de origen japonés. Hay diferencias en las prácticas
                comerciales y estilos de comunicación que pueden afectar la
                negociación
              </h3>
            </div>

            {/* Mostrar los mensajes de la conversación */}
            <div className="px-14">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`${msg.sender === "user" ? "text-right" : "text-left"}`}
                >
                  {/* Mostrar quién envió el mensaje */}
                  <div className="">
                    {msg.sender === "user" ? "Tú" : "Socio Internacional"}
                  </div>

                  {/* Mostrar el contenido del mensaje */}
                  <div
                    className={`${msg.sender === "user" ? "bg-transparent text-right" : "bg-transparent text-left"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
                Respuesta:
                <input
                  type="text"
                  className="input grow"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu respuesta"
                />
              </label>

              {/* Botón Enviar */}
              <button
                onClick={handleSendMessage}
                className={`btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700 ${!isSendEnabled || interactionCount >= 5 ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={!isSendEnabled || interactionCount >= 5}
              >
                {interactionCount < 5 ? "Enviar" : "Finalizar"}
              </button>
            </div>

            {/* Link de redirección siempre debajo del input */}
            <div className="mt-4">
              <Link
                href="/Ver/preguntas/photo"
                className="btn rounded-md bg-blue-500 text-white hover:bg-blue-700"
              >
                Enviar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
