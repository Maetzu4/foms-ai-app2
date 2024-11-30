import { Play, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Preview() {
  return (
    <div className="px-10 min-h-screen flex items-center justify-center">
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

        <div className="card shadow-xl rounded-lg">
          <div className="card-body p-6">
            <p className="mb-4">
              A continuación encontrarás una serie de preguntas y simulaciones para poder servirte mejor. No dudes en expresarte como quieras y sin restricción.
            </p>

            <div className="relative w-full h-96 mb-4">
              <Image
                src="/images/hotel-santa-teresa.jpg" // Ruta de tu imagen SVG o PNG
                alt="Imagen del Hotel Santa Teresa"
                layout="fill"
                objectFit="cover"
                className="rounded-lg" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="btn bg-blue-500 text-white rounded-full">
                  <Play size={27} />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/forms/1/"
                className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md"
              >
                Editar
              </Link>
              <Link
                href="/forms/1/Preview/preguntas"
                className="btn bg-blue-500 text-white transition hover:bg-blue-700 rounded-md"
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
