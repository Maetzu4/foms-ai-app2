import { FileImage, Send } from "lucide-react";
import Link from "next/link";

export default function id() {

    return (
        <div className="px-10">

            <div className="flex items-center justify-between mt-10 px-8">
                <h2 className="mb-4 text-2xl font-semibold text-blue-400 flex-1 text-center">
                    Nuevo formulario
                </h2>

                <div>
                    <Link href="404" className="hover:text-blue-700 transition duration-500">
                        <Send size={32} />
                    </Link>
                </div>
            </div>

            <div className="py-10 text-center">

                <div className="card shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-2">
                            <label className="md:input md:input-bordered md:flex items-center gap-2 w-full">
                                Nombre del formulario:
                                <input type="text" className="grow input" placeholder="ENCUESTA DE SATISFACCIÓN DEL CLIENTE HOTEL SANTA TERESA" />
                            </label>

                            <button className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md">
                                <FileImage size={26} />
                            </button>
                        </div>

                        <span className="text-left px-4">Descripcion del formulario:</span>
                        <textarea className="textarea textarea-bordered h-44" placeholder="A continuación encontrarás una serie de preguntas y simulaciones para poder servirte mejor. No dudes en expresarte como quieras y sin restricción."></textarea>

                        <div className="justify-center">
                            <Link
                                href="/forms/1/Preview"
                                className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md">
                                <button type="submit">Enviar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}