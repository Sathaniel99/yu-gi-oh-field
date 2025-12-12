// components
import { Tooltip } from "./Tooltip";
// components: icons
import { BsGear } from "react-icons/bs";
import * as Cards_type from "./Cards_type";

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
        alt: "Deck",
        tooltip: "Mazo principal: contiene las cartas de tu baraja desde las que robas.",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "monster": {
        className: "hue-rotate-0",
        label: "MAIN MONSTER ZONE",
        alt: "Main Monster Zone",
        tooltip: "Main Monster Zone: coloca aquí tus monstruos en posición de ataque/defensa.",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: true,
        zoneClass: "bg-white/5 group-hover:bg-amber-800/70"
    },
    "magic/trap": {
        className: "hue-rotate-90",
        label: "MAGIC/TRAP ZONE",
        alt: "Magic/Trap Zone",
        tooltip: "Magic/Trap Zone: zona para cartas mágicas y trampas activas.",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "field zone": {
        className: "hue-rotate-110",
        label: "FIELD ZONE",
        alt: "Field Zone",
        tooltip: "Field Zone: zona para cartas de campo que afectan a ambos jugadores.",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "extra monster zone": {
        className: "hue-rotate-180",
        label: "EXTRA MONSTER ZONE",
        alt: "Extra Monster Zone",
        tooltip: "Extra Monster Zone: zona para invocaciones de monstruos extra (reglas modernas).",
        bgClass: "group-hover:bg-blue-600/30",
        shadowClass: "group-hover:shadow-blue-600/50",
        image: "card.webp",
        showZone: true,
        zoneClass: "bg-blue-600/10 group-hover:bg-blue-800/30"
    },
    "extra deck": {
        className: "hue-rotate-260",
        label: "EXTRA DECK",
        alt: "Extra Deck",
        tooltip: "Extra Deck: contiene monstruos que se invocan desde el Extra Deck (Synchro/Xyz/Fusion/etc.).",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "graveyard": {
        className: "grayscale",
        label: "GRAVEYARD",
        alt: "Graveyard",
        tooltip: "Graveyard: cementerio donde van las cartas descartadas o destruidas.",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "void zone": {
        className: "grayscale rotate-90",
        label: "VOID ZONE",
        alt: "Void Zone",
        tooltip: "Void Zone: zona especial fuera del juego (zona de cartas removidas o efecto especial).",
        bgClass: "group-hover:bg-amber-600/30",
        shadowClass: "group-hover:shadow-amber-600/50",
        image: "card.webp",
        showZone: false
    },
    "pendulum-left": {
        className: "",
        label: "PENDULUM LEFT",
        alt: "Pendulum Izquierdo",
        tooltip: "Pendulum Zone (izquierda): coloca cartas Péndulo para efectos y escalas.",
        bgClass: "group-hover:bg-red-600/30",
        shadowClass: "group-hover:shadow-red-600/50",
        image: "p_der.webp",
        showZone: true,
        zoneClass: "bg-red-600/30 group-hover:bg-red-800/70"
    },
    "pendulum-right": {
        className: "",
        label: "PENDULUM RIGHT",
        alt: "Pendulum Derecho",
        tooltip: "Pendulum Zone (derecha): coloca cartas Péndulo para efectos y escalas.",
        bgClass: "group-hover:bg-blue-600/30",
        shadowClass: "group-hover:shadow-blue-600/50",
        image: "p_izq.webp",
        showZone: true,
        zoneClass: "bg-blue-600/30 group-hover:bg-blue-600/30"
    },
    "speed zone": {
        className: "",
        label: "SPEED ZONE",
        alt: "Speed Zone",
        tooltip: "Speed Zone: zona específica para duelos Speed Duel.",
        bgClass: "group-hover:bg-blue-600/30",
        shadowClass: "group-hover:shadow-blue-600/50",
        image: "card.webp",
        showZone: false
    },
    "ghost": {
        className: "",
        label: "",
        alt: "Ghost card/zone",
        tooltip: "Zona vacia de duelo.",
        bgClass: "",
        shadowClass: "",
        image: "card.webp",
        showZone: false
    },
    "null": {
        className: "hidden",
        label: "",
        alt: "No card here",
        tooltip: "",
        bgClass: "",
        shadowClass: "",
        image: "card.webp",
        showZone: false
    }
} as const;

export function Cards({ type }: CardsProps) {
    const config = CARD_CONFIG[type];
    const isGhost = type === Cards_type.GHOST ? 'opacity-10' : '';
    const isSpeedZone = type === Cards_type.SPEED_ZONE ? 'brightness-0' : '';
    const isVoidZone = type === Cards_type.VOID_ZONE ? 'invert' : '';
    const cursor = type === Cards_type.NULL ? 'cursor-default' : 'cursor-pointer';

    return (
        <>
            <Tooltip text={config.tooltip}>
                <div
                    className={`relative flex justify-center w-13 sm:w-16 md:w-14 lg:w-19 xl:w-25 2xl:w-30 h-13 sm:h-16 md:h-14 lg:h-19 xl:h-25 2xl:h-30 aspect-2/3 ${cursor} ${ isGhost }`}
                    title={config.tooltip}
                    aria-label={config.tooltip}
                >
                    {/* Mostrar zona de defensa solo para tipos específicos */}
                    {config.showZone && (
                        <div className="absolute h-full w-full flex items-center justify-center z-3">
                            <div className={`h-[75%] w-full flex items-center justify-center text-center transition-all border-2 border-dashed border-white ${config.zoneClass || ''}`}></div>
                        </div>
                    )}
                    {/* Etiqueta de la zona */}
                    <div className="absolute w-full h-full flex justify-center items-center z-4">
                        <h1 className={`font-bold font-permanent-marker not-italic text-white text-center hidden xl:block text-sm text-shadow-neutral-950 text-shadow-md ${ isVoidZone }`}>
                            {config.label}
                        </h1>
                    </div>
                    {/* Contenedor de la carta */}
                    <div className={`relative h-full w-auto ${config.shadowClass} shadow-2xl transition-all rounded-lg overflow-hidden ${config.className} ${ isVoidZone }`}>
                        {/* Fondo de hover */}
                        <div className={`absolute h-full w-full z-2 ${config.bgClass}`}>
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
                            className={`w-auto h-full object-cover rounded z-1 ${isSpeedZone}`}
                            src={`./${config.image}`}
                            alt={config.alt}
                        />
                    </div>
                </div>
            </Tooltip>
        </>
    );
}