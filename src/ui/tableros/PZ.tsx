import { Field } from "../../components/Field";
import type { CardType } from "../../components/Cards";

const support_field: CardType[] = [
    "extra deck",
    "magic/trap",
    "magic/trap",
    "magic/trap",
    "magic/trap",
    "magic/trap",
    "deck",
]
const monster_field: CardType[] = [
    "pendulum-left",
    "monster",
    "monster",
    "monster",
    "monster",
    "monster",
    "pendulum-right",
]
const neutral_field: CardType[] = [
    "graveyard",
    "void zone",
    "null",
    "field zone",
    "null",
    "void zone",
    "graveyard",
]

export function Pendulum_Zone() {
    return (
        <div className="border-2 border-neutral-50/5 rounded-2xl p-3 background-object">
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-3">
                <Field field={support_field} side={'oponent'} />
                <Field field={monster_field} side={'oponent'} />
            </div>
            <Field field={neutral_field} side="neutral" />
            <div className="flex flex-col gap-2 md:gap-1 lg:gap-3">
                <Field field={monster_field} side={'player'} />
                <Field field={support_field} side={'player'} />
            </div>
        </div>
    );
}