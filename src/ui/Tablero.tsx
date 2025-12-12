// hooks
import { useContext } from "react";
import { VersionContext } from "../hooks/contexts";
// components: tableros
import { Classic_Version } from "./tableros/CV";
import { Extra_Monster_Zone } from "./tableros/EMZ";
import { Pendulum_Zone } from "./tableros/PZ";
import { Speed_Duel } from "./tableros/SD";
import { Default_field } from "./tableros/Default_field";

export function Tablero() {
    const { estadoVersion } = useContext(VersionContext);

    const tableros = {
        CV: <Classic_Version />,
        PZ: <Pendulum_Zone />,
        EMZ: <Extra_Monster_Zone />,
        SD: <Speed_Duel />,
        DF: <Default_field />
    };

    return (
        <div className='flex-1 min-w-0 overflow-hidden'>
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 border-2 border-gray-500/50 bg-card rounded-xl p-6 border-border">
                {tableros[estadoVersion as keyof typeof tableros] || tableros.DF}
            </div>
        </div>
    )
}