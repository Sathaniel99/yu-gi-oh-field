import { Tooltip } from "./Tooltip";
import { BsGear } from "react-icons/bs";

export type CardType =
    | "extra deck"
    | "null"
    | "ghost"
    | "magic/trap"
    | "deck"
    | "field zone"
    | "monster"
    | "graveyard"
    | "void zone"
    | "extra monster zone"
    | "pendulum-left"
    | "pendulum-right"
    | "speed zone";

interface CardsProps {
    type: CardType;
}

// Unificar toda la información de cada tipo de carta
const CARD_CONFIG = {
    "deck": {
        className: "hue-rotate-0",
        label: "DECK",
        tooltip: "Mazo principal: contiene las cartas de tu baraja desde las que robas.",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "monster": {
        className: "hue-rotate-0",
        label: "MAIN MONSTER ZONE",
        tooltip: "Main Monster Zone: coloca aquí tus monstruos en posición de ataque/defensa.",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: true,
        zoneClass: "bg-white/5 group-hover:bg-amber-800/70"
    },
    "magic/trap": {
        className: "hue-rotate-90",
        label: "MAGIC/TRAP ZONE",
        tooltip: "Magic/Trap Zone: zona para cartas mágicas y trampas activas.",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "field zone": {
        className: "hue-rotate-110",
        label: "FIELD ZONE",
        tooltip: "Field Zone: zona para cartas de campo que afectan a ambos jugadores.",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "extra monster zone": {
        className: "hue-rotate-180",
        label: "EXTRA MONSTER ZONE",
        tooltip: "Extra Monster Zone: zona para invocaciones de monstruos extra (reglas modernas).",
        bgClass: "group-hover:shadow-blue-600/50 group-hover:bg-blue-600/30",
        image: "card.webp",
        showZone: true,
        zoneClass: "bg-blue-600/10 group-hover:bg-blue-800/30"
    },
    "extra deck": {
        className: "hue-rotate-260",
        label: "EXTRA DECK",
        tooltip: "Extra Deck: contiene monstruos que se invocan desde el Extra Deck (Synchro/Xyz/Fusion/etc.).",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "graveyard": {
        className: "grayscale",
        label: "GRAVEYARD",
        tooltip: "Graveyard: cementerio donde van las cartas descartadas o destruidas.",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "void zone": {
        className: "invert grayscale rotate-90",
        label: "VOID ZONE",
        tooltip: "Void Zone: zona especial fuera del juego (zona de cartas removidas o efecto especial).",
        bgClass: "group-hover:shadow-amber-600/50 group-hover:bg-amber-600/30",
        image: "card.webp",
        showZone: false
    },
    "pendulum-left": {
        className: "",
        label: "PENDULUM CARDS",
        tooltip: "Pendulum Zone (izquierda): coloca cartas Péndulo para efectos y escalas.",
        bgClass: "group-hover:shadow-red-600/50 group-hover:bg-red-600/30",
        image: "p_der.webp",
        showZone: true,
        zoneClass: "bg-red-600/30 group-hover:bg-red-800/70"
    },
    "pendulum-right": {
        className: "",
        label: "PENDULUM CARDS",
        tooltip: "Pendulum Zone (derecha): coloca cartas Péndulo para efectos y escalas.",
        bgClass: "group-hover:shadow-blue-600/50 group-hover:bg-blue-600/30",
        image: "p_izq.webp",
        showZone: true,
        zoneClass: "bg-blue-600/30 group-hover:bg-blue-600/30"
    },
    "speed zone": {
        className: "",
        label: "SPEED ZONE",
        tooltip: "Speed Zone: zona específica para duelos Speed Duel.",
        bgClass: "group-hover:shadow-blue-600/50 group-hover:bg-blue-600/30",
        image: "card.webp",
        showZone: false
    },
    "ghost": {
        className: "",
        label: "",
        tooltip: "Zona vacia de duelo.",
        bgClass: "",
        image: "card.webp",
        showZone: false
    },
    "null": {
        className: "hidden",
        label: "",
        tooltip: "",
        bgClass: "",
        image: "card.webp",
        showZone: false
    }
} as const;

export function Cards({ type }: CardsProps) {
    const config = CARD_CONFIG[type];
    const isGhost = type === 'ghost';
    const isSpeedZone = type === 'speed zone';
    const isVoidZone = type === 'void zone';
    const cursor = type === 'null' ? 'cursor-default' : 'cursor-pointer';

    // Separar las clases de hover correctamente
    const bgClasses = config.bgClass.split(' ');
    const shadowClass = bgClasses[0] || '';
    const bgClass = bgClasses.slice(1).join(' ') || '';

    return (
        <>
            <Tooltip text={config.tooltip}>
                <div
                    className={`relative flex justify-center w-30 h-30 aspect-2/3 ${cursor} ${isGhost ? 'opacity-10' : ''}`}
                    title={config.tooltip}
                    aria-label={config.tooltip}
                >
                    {/* Mostrar zona de defensa solo para tipos específicos */}
                    {config.showZone && (
                        <div className="absolute h-full w-full hidden md:flex items-center justify-center z-3">
                            <div className={`h-[75%] w-full flex items-center justify-center text-center transition-all border-2 border-dashed border-white ${config.zoneClass || ''}`}></div>
                        </div>
                    )}

                    {/* Contenedor de la carta */}
                    <div className={`relative h-full w-auto ${shadowClass} shadow-2xl transition-all rounded-lg overflow-hidden ${config.className}`}>
                        {/* Etiqueta de la zona */}
                        <div className="absolute w-full h-full flex justify-center items-center z-4">
                            <h1 className={`font-bold font-permanent-marker not-italic text-shadow-neutral-950 text-shadow-md text-white text-center md:text-xs ${ isVoidZone ? 'rotate-270' : '' }`}>
                                {config.label}
                            </h1>
                        </div>

                        {/* Fondo de hover */}
                        <div className={`absolute h-full w-full z-2 ${bgClass}`}>
                            {isSpeedZone && (
                                <div className="relative w-full h-full overflow-hidden">
                                    {/* Engranaje 1 - superior izquierdo */}
                                    <div className="absolute top-1/12 left-0">
                                        <BsGear size={55} className="gear-clockwise text-white/10" />
                                    </div>

                                    {/* Engranaje 2 - inferior derecho */}
                                    <div className="absolute top-4/12 right-0/4 transform">
                                        <BsGear size={44} className="gear-counterclockwise text-white/10" />
                                    </div>

                                    {/* Engranaje 3 - inferior izquierdo */}
                                    <div className="absolute bottom-2/12 right-2/4">
                                        <BsGear size={32} className="gear-clockwise text-white/10" style={{ animationDuration: '2.5s' }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Imagen de la carta */}
                        <img
                            className={`w-auto h-full object-cover rounded z-1 ${isSpeedZone ? 'brightness-0' : ''}`}
                            src={`./${config.image}`}
                            alt={type}
                        />
                    </div>
                </div>
            </Tooltip>
        </>
    );
}