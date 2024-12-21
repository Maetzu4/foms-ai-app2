import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Error 404: Pagina no encontrada</h1>
      </div>
      <div>
        <Link
          href="/"
          className="btn bg-blue-500 text-white transition duration-500 hover:bg-blue-800"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}
