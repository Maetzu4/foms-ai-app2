
"use client"

import { CircleCheck, FileImage, MessageSquareText, Plus, Send, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";


export default function Preguntas() {
    const [mostrarAbierta, setMostrarAbierta] = useState(false);
    const [mostrarAnalisis, setMostrarAnalisis] = useState(false);
    const [mostrarDialogo, setMostrarDialogo] = useState(false);
    const [respuestas, setRespuestas] = useState([{ id: 1, activo: false, activo2: false }]);
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
                    setRespuestas([{ id: 1, activo: false, activo2: false }]);
                    break;
                case "Pregunta abierta":
                    setMostrarAbierta(true);
                    setMostrarAnalisis(false);
                    setMostrarDialogo(false);
                    setRespuestas([{ id: 1, activo: false, activo2: false }]);
                    break;
                case "Análisis abierto":
                    setMostrarAnalisis(true);
                    setMostrarAbierta(false);
                    setMostrarDialogo(false);
                    setRespuestas([{ id: 1, activo: false, activo2: false }]);
                    break;
                case "Diálogo":
                    setMostrarDialogo(true);
                    setMostrarAnalisis(false);
                    setMostrarAbierta(false);
                    setRespuestas([{ id: 1, activo: false, activo2: false }]);
                    break;
                default:
                    break;
            }
        }
    };

    const handleAddRespuesta = () => {
        setRespuestas((prevRespuestas) => [
            ...prevRespuestas,
            { id: prevRespuestas.length + 1, activo: false, activo2: false },
        ]);
    };

    // Función para alternar el estado de un botón específico (cualitativo o cuantitativo)
    const toggleButtonState = (id: number, type: string | number) => {
        setRespuestas((prevRespuestas) =>
            prevRespuestas.map((respuesta) =>
                respuesta.id === id
                    ? { ...respuesta, [type]: !respuesta[type] }
                    : respuesta
            )
        );
    };

    return (
        <div className="px-10">
            <div className="py-10 text-center">
                <div className="flex items-center justify-between mt-10 px-8">
                    <h2 className="mb-4 text-2xl font-semibold text-blue-400 flex-1 text-center">
                        ENCUESTA DE SATISFACCIÓN DEL CLIENTE HOTEL SANTA TERESA
                    </h2>

                    <div>
                        <Link href="404" className="hover:text-blue-700 transition duration-500">
                            <Send size={32} />
                        </Link>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-2 mb-4">
                            <label className="md:input md:input-bordered md:flex items-center gap-2 w-full">
                                Pregunta 1
                                <input
                                    type="text"
                                    className="grow input"
                                    placeholder="¿Cuántas razas de gatos hay?" />
                            </label>
                            <button className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md">
                                <FileImage size={26} />
                            </button>
                        </div>

                        <div className="items-center mb-4">
                            <select
                                ref={selectRef}
                                name="tipo_pregunta"
                                id="tipo_pregunta"
                                onChange={handleChange}
                                className="select bg-blue-500 text-white w-full">
                                <option value="Selecciona el tipo">Selecciona el tipo</option>
                                <option value="Pregunta abierta">Pregunta abierta</option>
                                <option value="Análisis abierto">Análisis abierto</option>
                                <option value="Diálogo">Diálogo</option>
                            </select>
                        </div>

                        {mostrarAbierta && (
                            <div>
                                {respuestas.map((respuesta) => (
                                    <div
                                        key={respuesta.id}
                                        className="flex items-center gap-2 mb-4">

                                        <label className="md:input md:input-bordered md:flex items-center gap-2 w-full">
                                            <ThumbsUp size={26} />
                                            <input
                                                type="text"
                                                className="grow input"
                                                placeholder="Escribe la respuesta aquí" />
                                        </label>
                                        <label className="md:input md:input-bordered md:flex items-center gap-2 w-full">
                                            <MessageSquareText size={26} />
                                            <input
                                                type="text"
                                                className="grow input"
                                                placeholder="Mensaje si responde " />
                                        </label>

                                        <input type="checkbox" className="checkbox checkbox-primary" />

                                    </div>
                                ))}

                                <button
                                    onClick={handleAddRespuesta}
                                    className="btn-link flex text-blue-500 hover:text-blue-700 gap-2">
                                    <Plus size={26} />
                                    Añadir otra respuesta
                                </button>
                                <div className="justify-center">
                                    <Link href="/" className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md">
                                        Enviar
                                    </Link>
                                </div>
                            </div>
                        )}

                        {mostrarAnalisis && (
                            <div>
                                {respuestas.map((respuesta) => (
                                    <div key={respuesta.id} className="mb-4">
                                        <div className="flex justify-between gap-10 mb-4 px-20">
                                            <button
                                                className={`btn text-white flex justify-between gap-2 rounded-lg transition-all duration-300 w-52 ${respuesta.activo ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-400 hover:bg-slate-600'
                                                    }`}
                                                onClick={() => toggleButtonState(respuesta.id, 'activo')}
                                            >
                                                Cualitativo
                                                {respuesta.activo && <CircleCheck size={24} />}
                                            </button>

                                            <button
                                                className={`btn text-white flex justify-between gap-2 rounded-lg transition-all duration-300 w-52 ${respuesta.activo2 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-400 hover:bg-slate-600'
                                                    }`}
                                                onClick={() => toggleButtonState(respuesta.id, 'activo2')}
                                            >
                                                Cuantitativo (1 - 10)
                                                {respuesta.activo2 && <CircleCheck size={24} />}
                                            </button>
                                        </div>

                                        <div>
                                            <label className="md:input md:input-bordered md:flex items-center gap-2 w-full">
                                                <ThumbsUp size={26} />
                                                <input
                                                    type="text"
                                                    className="grow input"
                                                    placeholder="Análisis"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={handleAddRespuesta}
                                    className="btn-link flex text-blue-500 hover:text-blue-700 gap-2"
                                >
                                    <Plus size={26} />
                                    Añadir otra respuesta
                                </button>

                                <div className="justify-center">
                                    <Link href="/" className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md">
                                        Enviar
                                    </Link>
                                </div>
                            </div>
                        )}

                        {mostrarDialogo && (
                            <div>
                                <h2>Dialogo</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}
