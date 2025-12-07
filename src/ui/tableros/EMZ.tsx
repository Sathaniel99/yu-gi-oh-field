import { Field } from "../../components/Field";
import type { CardType } from "../../components/Cards";

const support_field: CardType[] = [
    "extra deck",
    "pendulum-left",
    "magic/trap",
    "magic/trap",
    "magic/trap",
    'pendulum-right',
    "deck",
]
const monster_field: CardType[] = [
    "field zone",
    "monster",
    "monster",
    "monster",
    "monster",
    "monster",
    "graveyard",
]
const neutral_field: CardType[] = [
    "void zone",
    "null",
    'extra monster zone',
    "null",
    'extra monster zone',
    "null",
    "void zone",
]

export function Extra_Monster_Zone() {
    return (
        <div className="border-2 border-neutral-50/5 rounded-2xl p-3 background-object">
            <div className="flex flex-col gap-3">
                <Field field={support_field} side={'oponent'} />
                <Field field={monster_field} side={'oponent'} />
            </div>
            <Field field={neutral_field} side="neutral" />
            <div className="flex flex-col gap-3">
                <Field field={monster_field} side={'player'} />
                <Field field={support_field} side={'player'} />
            </div>
        </div>
    );
}