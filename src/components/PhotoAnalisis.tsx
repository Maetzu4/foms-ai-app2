import { ThumbsUp, MessageSquareText, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const PhotoAnalisis = () => {
  const [respuestas, setRespuestas] = useState([
    { id: 1, activo: false, activo2: false },
  ]);

  const handleAddRespuesta = () => {
    setRespuestas((prevRespuestas) => [
      ...prevRespuestas,
      { id: prevRespuestas.length + 1, activo: false, activo2: false },
    ]);
  };
  return (
    <div>
      {respuestas.map((respuesta) => (
        <div key={respuesta.id} className="mb-4 flex items-center gap-2">
          <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
            <ThumbsUp size={26} />
            <input
              type="text"
              className="input grow"
              placeholder="requisito a cumplir"
            />
          </label>
          <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
            <MessageSquareText size={26} />
            <input
              type="text"
              className="input grow"
              placeholder="Mensaje si responde "
            />
          </label>

          {/* <input type="checkbox" className="checkbox-primary checkbox" /> */}
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
          href="/forms/1/Preview/preguntas/photo"
          className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
        >
          Enviar
        </Link>
      </div>
    </div>
  );
};

export default PhotoAnalisis;
