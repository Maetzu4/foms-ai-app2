// src/app/page.tsx
"use client";

import { EllipsisVertical, Eye, List, PencilLine, Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const formulariosRecientes = ["formulario 1", "formulario 2", "formulario 3"];

  return (
    <div className="px-4 md:px-20 lg:px-40 xl:px-72">
      <div className="py-10 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-blue-400">
          Hola bienvenido, Nathan
        </h2>
        <br />
        <Link
          href="/forms/1"
          className="btn rounded-lg bg-blue-500 text-white transition duration-500 hover:bg-blue-600"
        >
          <Plus size={24} />
          NUEVO FORMULARIO
        </Link>
        <Link
          href="/Ver"
          className="btn rounded-lg bg-blue-500 text-white transition duration-500 hover:bg-blue-600"
        >
          <Eye size={24} />
          VER FORMULARIO
        </Link>
      </div>
      <div className="card shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="mb-2 text-lg text-blue-400">
              Formularios recientes
            </h2>
            <Link href="/forms">
              <h2 className="mb-2 text-lg text-blue-400">Ver todos</h2>
            </Link>
          </div>
          <div className="card">
            {formulariosRecientes.map((formulario, index) => (
              <div className="flex items-center justify-between" key={index}>
                <p className="py-1">{formulario} </p>
                <div className="flex gap-2">
                  <Link
                    href="/forms/1"
                    className="transition duration-500 hover:text-blue-700"
                  >
                    <PencilLine size={22} />
                  </Link>
                  <Link
                    href="'/forms/1'"
                    className="transition duration-500 hover:text-blue-700"
                  >
                    <List size={22} />
                  </Link>
                  <Link
                    href="'/forms/1'"
                    className="transition duration-500 hover:text-blue-700"
                  >
                    <EllipsisVertical size={22} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
