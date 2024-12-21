import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Preview() {
  return (
    <div className="flex min-h-screen items-center justify-center px-10">
      <div className="py-10 text-center">
        <div className="mt-10 flex items-center justify-between px-8">
          <h2 className="mb-4 flex-1 text-center text-2xl font-semibold text-blue-400">
            ENCUESTA DE SATISFACCIÓN DEL CLIENTE HOTEL SANTA TERESA
          </h2>
        </div>

        <div className="card rounded-lg shadow-xl">
          <div className="card-body p-6">
            <p className="mb-4">
              A continuación encontrarás una serie de preguntas y simulaciones
              para poder servirte mejor. No dudes en expresarte como quieras y
              sin restricción.
            </p>

            <div className="relative mb-4 h-96 w-full">
              <Image
                src="/images/hotel-santa-teresa.jpg" // Ruta de tu imagen SVG o PNG
                alt="Imagen del Hotel Santa Teresa"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="btn rounded-full bg-blue-500 text-white">
                  <Play size={27} />
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/Ver/preguntas/abierta"
                className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
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
