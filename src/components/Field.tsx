import { Cards } from "./Cards"
import type { CardType } from "./Cards"

interface FieldProps {
    side?: 'oponent' | 'player' | 'neutral',
    field: CardType[],
}

export function Field({ side = "neutral", field }: FieldProps) {
    {/* Invertir el campo del oponente */ }
    const fieldToRender = side == 'oponent' ? [...field].reverse() : field;

    return (
        <div className={`flex justify-between flex-row 
        gap-0 sm:gap-2 
        my-0 sm:my-2`}>
            {fieldToRender.map((cardType, cardIndex) => (
                <Cards key={cardIndex} type={cardType} />
            ))}
        </div>
    )
}