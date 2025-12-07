import { useContext } from "react";
import { VersionContext } from "../hooks/contexts";

interface VersionOptions {
    name: string;
    year: string;
    shadowClass: string;
    activeClass: string;
    groupClass: string;
    keyname: string;
}

const version: VersionOptions[] = [
    { name: 'Classic Version', year: '2002 - 2013', keyname: 'CV', shadowClass: 'shadow-amber-500', activeClass: 'bg-amber-500', groupClass: 'group-hover:bg-amber-500 bg-neutral-500' },
    { name: 'Pendulum Zone', year: '2014', keyname: 'PZ', shadowClass: 'shadow-red-600', activeClass: 'bg-red-600', groupClass: 'group-hover:bg-red-600 bg-neutral-500' },
    { name: 'Extra Monster Zone', year: '2017', keyname: 'EMZ', shadowClass: 'shadow-cyan-500', activeClass: 'bg-cyan-500', groupClass: 'group-hover:bg-cyan-500 bg-neutral-500' },
    { name: 'Speed Duel', year: '2019', keyname: 'SD', shadowClass: 'shadow-green-600', activeClass: 'bg-green-600', groupClass: 'group-hover:bg-green-600 bg-neutral-500' },
]

export function Version() {
    const { estadoVersion, setEstadoVersion } = useContext(VersionContext);

    return (
        <>
            <div className="flex flex-col items-center gap-4 border-2 border-gray-500/50 bg-card rounded-xl p-6 border-border">
                <h2 className="text-lg font-semibold mb-1 font-poppins">Selecciona una Versión</h2>
                <div className="space-y-3">
                    {version.map((item) => (
                        <button
                            key={item.name}
                            className={`w-full p-4 rounded-2xl transition-all duration-300 text-left group shadow-lg hover:shadow-amber-400/25 border-2 ${estadoVersion == item.keyname ? `bg-gray-400/15 active:bg-gray-400/25 border-amber-400` : `bg-gray-400/5 hover:bg-gray-400/15 active:bg-gray-400/25 border-gray-600/20 hover:border-amber-400`}`}
                            onClick={() => setEstadoVersion(item.keyname)}
                        >
                            <div className="flex items-center gap-3">
                                {/* Dot */}
                                <div className={`w-3 h-3 rounded-full transition-all group-hover:shadow-sm ${item.shadowClass} ${estadoVersion == item.keyname ? item.activeClass : item.groupClass}`}></div>
                                {/* Labels */}
                                <div>
                                    <p className={`text-lg font-medium text-foreground transition-colors font-new-rocker not-italic ${estadoVersion == item.keyname ? `text-amber-400` : `group-hover:text-amber-400`}`}>{item.name}</p>
                                    <p className="text-sm text-white/35">{item.year}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}