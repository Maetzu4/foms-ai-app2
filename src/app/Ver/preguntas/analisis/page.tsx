"use client";

import { useState } from "react";
import Link from "next/link";

export default function Analisis() {
  // Estado para el mensaje (retroalimentación) y habilitación del botón "Enviar"
  const [message, setMessage] = useState("");
  const [isSendEnabled, setIsSendEnabled] = useState(false);

  // Función para mostrar el mensaje de retroalimentación
  const handleRetroalimentacion = () => {
    const feedbackMessage = `
      Descripción del Proceso: 
      Comunicación Ineficaz: El candidato no presentó razones 
      sólidas ni buscó comprender las restricciones de su jefe.
      
      Tácticas Utilizadas: 2/10
      Falta de Estrategia: No utilizó tácticas de negociación, 
      simplemente insistió sin proponer soluciones alternativas.
      
      Aprendizaje: 2/10
      Reflexión Limitada: No identifica aprendizajes significativos ni 
      cómo mejorar en futuras negociaciones.
    `;
    setMessage(feedbackMessage);

    // Habilitamos el botón "Enviar" solo después de presionar "Retroalimentación"
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
        </div>

        <div className="card shadow-xl">
          <div className="card-body">
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-xl">
                Describa que tan satisfecho está con el servicio de
                habitaciones.
              </h3>
            </div>
            <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
              Respuesta:
              <input type="text" className="input grow" placeholder="" />
            </label>

            {/* Mostrar el mensaje de retroalimentación */}
            {message && (
              <div
                className="mt-4 text-sm font-semibold"
                style={{
                  textAlign: "justify", // Justificar el texto
                  lineHeight: "1.8", // Aumentar el espaciado entre líneas
                  marginTop: "10px", // Espacio adicional encima del texto
                  whiteSpace: "pre-line", // Asegura que los saltos de línea sean respetados
                }}
              >
                {message}
              </div>
            )}

            <div className="mt-4 justify-center">
              {/* Botón Retroalimentación */}
              <Link
                href="#"
                onClick={handleRetroalimentacion}
                className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
              >
                Retroalimentacion
              </Link>

              {/* Botón Enviar (usando Link) */}
              <Link
                href="/Ver/preguntas/dialogo"
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
