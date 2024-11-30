import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center   ">
            <div className="text-center">
                <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">404</h1>
                <p className="text-2xl mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">Oops! Página no encontrada</p>
                <Link
                    href="/"
                    className="btn text-white bg-blue-500 hover:bg-blue-800 transition duration-500">
                    Volver a la página principal
                </Link>
            </div>
        </div>
    )
}