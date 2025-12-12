// components: icons
import { LuLayoutTemplate } from "react-icons/lu";

export function Default_field() {
    return (
        <>
            <div className="flex flex-col md:w-120 lg:w-120 gap-2">
                <div className="flex justify-center items-center rounded-full bg-neutral-50/5 mx-auto p-4">
                    <LuLayoutTemplate size={40} />
                </div>
                <h1 className="font-bold text-2xl text-center">Selecciona un Tablero</h1>
                <p className="text-white/50 text-center">Elige una versión del tablero de Yu-Gi-Oh! para ver cómo ha evolucionado el campo de juego a lo largo de los años.</p>
            </div>
        </>
    )
}