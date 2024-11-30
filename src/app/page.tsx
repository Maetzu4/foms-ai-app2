// src/app/page.tsx
"use client"

import { EllipsisVertical, List, PencilLine, Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {

  const formulariosRecientes = ['formulario 1', 'formulario 2', 'formulario 3', 'formulario 4', 'formulario 5'];

  return (
    <div className="px-4 md:px-20 lg:px-40 xl:px-72">
      <div className="py-10 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-blue-400">
          Hola bienvenido, Nathan
        </h2>
        <br />
        <Link
          href="/forms/1"
          className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition duration-500">
          <Plus size={24} />
          NUEVO FORMULARIO
        </Link>
      </div>
      <div className="card shadow-xl">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="mb-2 text-lg text-blue-400">Formularios recientes</h2>
            <Link href="/forms">
              <h2 className="mb-2 text-lg text-blue-400">Ver todos</h2>
            </Link>
          </div>
          <div className="card">
            {formulariosRecientes.map((formulario, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p className="py-1">{formulario} </p>
                <div className="flex gap-2">
                  <Link href='/forms/1' className="hover:text-blue-700 transition duration-500">
                    <PencilLine size={22} />
                  </Link>
                  <Link href="'/forms/1'" className="hover:text-blue-700 transition duration-500">
                    <List size={22} />
                  </Link>
                  <Link href="'/forms/1'" className="hover:text-blue-700 transition duration-500">
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