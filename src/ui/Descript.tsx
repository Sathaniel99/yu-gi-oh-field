// hooks
import { useContext } from "react";
import { VersionContext } from "../hooks/contexts";

interface Descripcion {
    id: number;
    name: string;
    year: string;
    descripcion: string;
    caract: string[];
}

interface CaracteristicasList {
    items: string[];
}

const descripcion: Record<string, Descripcion> = {
    "CV": {
        id: 1,
        name: "Classic Version",
        year: "2002 - 2013",
        descripcion: "El tablero original de Yu-Gi-Oh! con las zonas básicas de juego.",
        caract: ["5 Monster Zones", "5 Spell/Trap Zones", "Field Zone", "Graveyard", "Deck", "Extra Deck"]
    },
    "PZ": {
        id: 2,
        name: "Pendulum Zone",
        year: "2014",
        descripcion: "Introducción de las Pendulum Zones para la invocación Pendulum.",
        caract: ["Pendulum Zones añadidas", "Nuevas mecánicas de escala", "Invocación masiva de monstruos"]
    },
    "EMZ": {
        id: 3,
        name: "Extra Monster Zone",
        year: "2017",
        descripcion: "Nueva era con Link Monsters y Extra Monster Zones compartidas.",
        caract: ["2 Extra Monster Zones", "Link Arrows", "Pendulum Zones integradas", "Nuevas estrategias de posicionamiento"]
    },
    "SD": {
        id: 4,
        name: "Speed Duel",
        year: "2019",
        descripcion: "Formato simplificado para partidas rápidas y dinámicas.",
        caract: ["3 Monster Zones", "3 Spell/Trap Zones", "Skill Cards", "Partidas más rápidas"]
    },
}

function CaracteristicasList({ items }: CaracteristicasList) {
    return (
        <ul className="space-y-1">
            {items.map((item, index) => (
                <li key={index} className="text-sm font-semibold text-neutral-50/75 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function Description() {
    const { estadoVersion } = useContext(VersionContext);

    const descripcionActual = descripcion[estadoVersion];

    if (!descripcionActual) {
        return <>
            <div className="bg-card rounded-xl p-6 border-2 border-gray-500/50 animate-in fade-in slide-in-from-left-4 duration-300 relative">
                <h1>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>Selecciona una versión para ver su descripción.</h1>
            </div>
        </>
    }

    return (
        <>
            {(estadoVersion != "") &&
                <div key={descripcionActual.id} className="bg-card rounded-xl p-6 border-2 border-gray-500/50 animate-in fade-in slide-in-from-left-4 duration-300 relative">
                    <p className="text-sm absolute top-0 right-0 m-2 text-neutral-500 font-bold text-center">{descripcionActual.year}</p>
                    <div className="">
                        <h3 className="text-2xl font-bold text-amber-500 font-new-rocker text-center">{descripcionActual.name}</h3>
                    </div>
                    <p className="text-foreground/80 font-bold mb-4">{descripcionActual.descripcion}</p>
                    <div className="border-2 border-neutral-50/25 rounded-md p-3">
                        <h1 className="text-lg font-semibold text-foreground text-center p-1 rounded-md bg-neutral-50/5">Características:</h1>
                        <hr className="my-2 border-neutral-50/25" />
                        <CaracteristicasList items={descripcionActual.caract} />
                    </div>
                </div>
            }
        </>
    )
}