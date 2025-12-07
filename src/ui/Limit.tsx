import { IoBuild } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";

export function Limit() {
    return (
        <section className="flex flex-col md:hidden h-screen justify-center items-center p-4">
            <div className="flex mx-auto relative mt-auto rounded-full border-2 border-neutral-500 p-5 bg-neutral-50/5 shadow-lg">
                <IoBuild
                    className="absolute bottom-0 text-red-600 animate-pulse"
                    size={60}
                    aria-label="En construcción"
                />
                <FaRobot
                    size={150}
                    aria-label="Robot indicando versión móvil no disponible"
                />
            </div>
            <div className="text-center mb-auto">
                <h1 className="font-bold text-2xl">Lo sentimos</h1>
                <p className="text-neutral-50/50">Aún no está desarrollada la versión móvil. Puedes probar la versión de escritorio desde tu computadora.</p>
            </div>
        </section>
    )
}