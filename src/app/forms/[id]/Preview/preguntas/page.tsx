"use client";

import Analisis from "@/components/Analisis";
import Dialog from "@/components/Dialog";
import Open from "@/components/Open";
import { FileImage, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";

export default function Preguntas() {
  const [mostrarAbierta, setMostrarAbierta] = useState(false);
  const [mostrarAnalisis, setMostrarAnalisis] = useState(false);
  const [mostrarDialogo, setMostrarDialogo] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleChange = () => {
    const select = selectRef.current;
    if (select) {
      const selectedOption = select.options[select.selectedIndex];

      switch (selectedOption.value) {
        case "Selecciona el tipo":
          setMostrarAbierta(false);
          setMostrarAnalisis(false);
          setMostrarDialogo(false);
          //setRespuestas([{ id: 1, activo: false, activo2: false }]);
          break;
        case "Pregunta abierta":
          setMostrarAbierta(true);
          setMostrarAnalisis(false);
          setMostrarDialogo(false);
          //setRespuestas([{ id: 1, activo: false, activo2: false }]);
          break;
        case "Análisis abierto":
          setMostrarAnalisis(true);
          setMostrarAbierta(false);
          setMostrarDialogo(false);
          //setRespuestas([{ id: 1, activo: false, activo2: false }]);
          break;
        case "Diálogo":
          setMostrarDialogo(true);
          setMostrarAnalisis(false);
          setMostrarAbierta(false);
          //setRespuestas([{ id: 1, activo: false, activo2: false }]);
          break;
        default:
          break;
      }
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
              href="/404"
              className="transition duration-500 hover:text-blue-700"
            >
              <Send size={32} />
            </Link>
          </div>
        </div>

        <div className="card shadow-xl">
          <div className="card-body">
            <div className="mb-4 flex items-center gap-2">
              <label className="w-full items-center gap-2 md:input md:input-bordered md:flex">
                Pregunta 1
                <input
                  type="text"
                  className="input grow"
                  placeholder="¿Cuántas razas de gatos hay?"
                />
              </label>
              <button className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700">
                <FileImage size={26} />
              </button>
            </div>

            <div className="mb-4 items-center">
              <select
                ref={selectRef}
                name="tipo_pregunta"
                id="tipo_pregunta"
                onChange={handleChange}
                className="select w-full bg-blue-500 text-white"
              >
                <option value="Selecciona el tipo">Selecciona el tipo</option>
                <option value="Pregunta abierta">Pregunta abierta</option>
                <option value="Análisis abierto">Análisis abierto</option>
                <option value="Diálogo">Diálogo</option>
              </select>
            </div>

            {mostrarAbierta && <Open />}

            {mostrarAnalisis && <Analisis />}

            {mostrarDialogo && <Dialog />}
          </div>
        </div>
      </div>
    </div>
  );
}
