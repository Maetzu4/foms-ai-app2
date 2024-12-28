"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ImagePlus } from "lucide-react"; // Cambié el icono a ImagePlus

export default function Photo() {
  // Estados
  const [message, setMessage] = useState("");
  const [isSendEnabled, setIsSendEnabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // Para determinar si la foto es válida
  const [image, setImage] = useState<File | null>(null); // Para almacenar la imagen subida
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Para almacenar la URL de la imagen para la vista previa

  // Función para comprobar si la imagen es válida
  const handleComprobar = () => {
    if (image) {
      // Validamos si la imagen tiene una extensión válida
      const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
      const isValid = validExtensions.includes(image.type);

      setIsCorrect(isValid);
      setMessage(isValid ? "Imagen válida" : "Imagen no válida");
    } else {
      setIsCorrect(false);
      setMessage("Por favor, sube una imagen");
    }

    // Habilitamos el botón "Enviar" solo después de presionar "Comprobar"
    setIsSendEnabled(true);
  };

  // Función para manejar la subida de la imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);

      // Creamos una URL para la imagen seleccionada para mostrar la vista previa
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para evitar la navegación si el botón "Enviar" está deshabilitado
  const handleSendClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!isSendEnabled) {
      e.preventDefault(); // Evita la navegación si "Enviar" está deshabilitado
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
                Sube una foto mostrando que sigues a X en redes sociales
              </h3>
            </div>

            {/* Vista previa de la imagen */}
            <div className="relative mx-auto flex h-64 w-9/12 cursor-pointer items-center justify-center rounded-md bg-blue-300">
              {/* Si hay una imagen, la mostramos, sino mostramos el ícono de añadir */}
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt="Vista previa"
                  className="h-full w-full rounded-md object-cover"
                />
              ) : (
                <ImagePlus size={48} className="text-white" />
              )}

              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
            </div>

            {/* Mostrar el mensaje de "Correcto" o "Incorrecto" */}
            {message && (
              <div className="mt-4 flex items-center justify-start gap-2 text-lg font-semibold">
                {/* Mostrar el ícono correspondiente dependiendo si la imagen es válida */}
                {isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}
                {message}
              </div>
            )}

            <div className="mt-4 justify-center">
              {/* Botón Comprobar */}
              <Link
                href="#"
                onClick={handleComprobar}
                className="btn rounded-md bg-blue-500 text-white transition hover:bg-blue-700"
              >
                Comprobar
              </Link>

              {/* Botón Enviar */}
              <Link
                href="/"
                onClick={handleSendClick}
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
