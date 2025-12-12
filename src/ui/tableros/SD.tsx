// components
import { Field } from "../../components/Field";
// config de fields
import { classic_neutral_field, speed_monster_field, speed_duel_support_field } from "./config";
import type { fieldProps } from "./config";

const field: fieldProps[] = [
    { field: speed_duel_support_field, side: 'oponent' as const },
    { field: speed_monster_field, side: 'oponent' as const },
    { field: classic_neutral_field, side: 'neutral' as const },
    { field: speed_monster_field, side: 'player' as const },
    { field: speed_duel_support_field, side: 'player' as const },
]

export function Speed_Duel() {
    return (
        <div className="border-2 border-neutral-50/5 rounded-2xl p-3 background-object">
            {field.map((config, index) => (
                <Field key={index} field={config.field} side={config.side} />
            ))}
        </div>
    );
}