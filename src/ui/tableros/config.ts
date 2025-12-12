// components
import type { CardType } from "../../components/Cards";
import * as Cards_type from "../../components/Cards_type";

export interface fieldProps {
    field: CardType[],
    side: 'oponent' | 'neutral' | 'player'
}

export const classic_support_field: CardType[] = [
    Cards_type.EXTRA_DECK,
    ...Array(5).fill(Cards_type.MAGIC_TRAP),
    Cards_type.DECK,
]
export const classic_monster_field: CardType[] = [
    Cards_type.FIELD_ZONE,
    ...Array(5).fill(Cards_type.MONSTER),
    Cards_type.GRAVEYARD,
]
export const classic_neutral_field: CardType[] = [
    Cards_type.VOID_ZONE,
    ...Array(5).fill(Cards_type.NULL),
    Cards_type.VOID_ZONE,
]
export const speed_monster_field: CardType[] = [
    Cards_type.FIELD_ZONE,
    Cards_type.GHOST,
    ...Array(3).fill(Cards_type.MONSTER),
    Cards_type.GHOST,
    Cards_type.GRAVEYARD,
]
export const speed_duel_support_field: CardType[] = [
    Cards_type.EXTRA_DECK,
    Cards_type.GHOST,
    ...Array(3).fill(Cards_type.MAGIC_TRAP),
    Cards_type.SPEED_ZONE,
    Cards_type.DECK,
]
export const links_neutral_field: CardType[] = [
    Cards_type.VOID_ZONE,
    Cards_type.NULL,
    Cards_type.EXTRA_MONSTER_ZONE,
    Cards_type.NULL,
    Cards_type.EXTRA_MONSTER_ZONE,
    Cards_type.NULL,
    Cards_type.VOID_ZONE,
]
export const pendulum_monster_field: CardType[] = [
    Cards_type.PENDULUM_LEFT,
    ...Array(5).fill(Cards_type.MONSTER),
    Cards_type.PENDULUM_RIGHT,
]
export const pendulum_neutral_field: CardType[] = [
    Cards_type.GRAVEYARD,
    Cards_type.VOID_ZONE,
    Cards_type.NULL,
    Cards_type.FIELD_ZONE,
    Cards_type.NULL,
    Cards_type.VOID_ZONE,
    Cards_type.GRAVEYARD,
]
export const pendulum_support_field: CardType[] = [
    Cards_type.EXTRA_DECK,
    Cards_type.PENDULUM_LEFT,
    ...Array(3).fill(Cards_type.MAGIC_TRAP),
    Cards_type.PENDULUM_RIGHT,
    Cards_type.DECK,
]