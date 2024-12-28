"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, Send } from "lucide-react"; // Asegúrate de importar ambos íconos

export default function Abierta() {
  // Estado para el mensaje (correcto/incorrecto) y habilitación del botón "Enviar"
  const [message, setMessage] = useState("");
  const [isSendEnabled, setIsSendEnabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Estado para determinar si es correcto o incorrecto

  // Función para comprobar la respuesta y generar el mensaje aleatorio
  const handleComprobar = () => {
    // Generamos un número aleatorio (0 o 1) para decidir si es "Correcto" o "Incorrecto"
    const isCorrect = Math.random() > 0.5;
    setIsCorrect(isCorrect);
    setMessage(isCorrect ? "Correcto" : "Incorrecto");

    // Habilitamos el botón "Enviar" solo después de presionar "Comprobar"
    setIsSendEnabled(true);
  };

  // Función para evitar la navegación si el botón "Enviar" está deshabilitado
  const handleSendClick = (e) => {
    if (!isSendEnabled) {
      e.preventDefault(); // Evita que el enlace se ejecute si "Enviar" está deshabilitado
    }
  };

  return (
    <div className="px-10">
      <div className="py-10 text-center">
        <div className="mt-10 flex items-center justify-between px-8">
          <h2 className="mb-4 flex-1 text-center text-2xl font-semibold text-blue-400">
            ENCUESTA DE SATISFACCIÓN DEL CLIENTE HOTEL SANTA TERESA
          </h2>
          <div>
            <Link
              href="404"
              className="transition duration-500 hover:text-blue-700"
            ></Link>
          </div>
        </div>

        <div className="card shadow-xl">
          <div className="card-body">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-xl">
                ¿Qué tan satisfecho estás con el servicio de habitaciones?
              </h3>
            </div>
            <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
              Respuesta:
              <input type="text" className="input grow" placeholder="" />
            </label>

            {/* Mostrar el mensaje de "Correcto" o "Incorrecto" */}
            {message && (
              <div className="mt-4 flex items-center justify-start gap-2 text-lg font-semibold">
                {/* Mostrar el ícono correspondiente dependiendo si es correcto o incorrecto */}
                {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
                {message}
              </div>
            )}

            <div className="mt-4 justify-center">
              {/* Botón Comprobar (usando Link) */}
              <Link
                href="#"
                onClick={handleComprobar}
                className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
              >
                Comprobar
              </Link>

              {/* Botón Enviar (usando Link) */}
              <Link
                href="/Ver/preguntas/analisis"
                onClick={handleSendClick} // Llamamos a la función para evitar la navegación si está deshabilitado
                className={`btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700 ${!isSendEnabled ? "cursor-not-allowed opacity-50" : ""}`}
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
