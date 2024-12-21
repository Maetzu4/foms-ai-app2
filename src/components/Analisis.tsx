import { CircleCheck, ThumbsUp, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Analisis = () => {
  const [respuestas, setRespuestas] = useState([
    { id: 1, activo: false, activo2: false },
  ]);

  const handleAddRespuesta = () => {
    setRespuestas((prevRespuestas) => [
      ...prevRespuestas,
      { id: prevRespuestas.length + 1, activo: false, activo2: false },
    ]);
  };

  const toggleButtonState = (id: number, type: "activo" | "activo2") => {
    setRespuestas((prevRespuestas) =>
      prevRespuestas.map((respuesta) =>
        respuesta.id === id
          ? { ...respuesta, [type]: !respuesta[type] }
          : respuesta,
      ),
    );
  };

  return (
    <div>
      {/* Botones Cualitativo y Cuantitativo fuera del bucle */}
      <div className="mb-4 flex justify-between gap-10 px-20">
        <button
          className={`btn flex w-52 justify-between gap-2 rounded-lg text-white transition-all duration-300 ${
            respuestas[0].activo
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-slate-400 hover:bg-slate-600"
          }`}
          onClick={() => toggleButtonState(respuestas[0].id, "activo")}
        >
          Cualitativo
          {respuestas[0].activo && <CircleCheck size={24} />}
        </button>

        <button
          className={`btn flex w-52 justify-between gap-2 rounded-lg text-white transition-all duration-300 ${
            respuestas[0].activo2
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-slate-400 hover:bg-slate-600"
          }`}
          onClick={() => toggleButtonState(respuestas[0].id, "activo2")}
        >
          Cuantitativo (1 - 10)
          {respuestas[0].activo2 && <CircleCheck size={24} />}
        </button>
      </div>

      {/* Bucle para mostrar las respuestas añadidas */}
      {respuestas.map((respuesta) => (
        <div key={respuesta.id} className="mb-4">
          <div>
            <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
              <ThumbsUp size={26} />
              <input
                type="text"
                className="input grow"
                placeholder="Análisis"
              />
            </label>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddRespuesta}
        className="btn-link flex gap-2 text-blue-500 hover:text-blue-700"
      >
        <Plus size={26} />
        Añadir otra respuesta
      </button>

      <div className="justify-center">
        <Link
          href="/forms/1/Preview/preguntas/analisis"
          className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
        >
          Enviar
        </Link>
      </div>
    </div>
  );
};

export default Analisis;
