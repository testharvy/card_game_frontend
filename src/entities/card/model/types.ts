// export const enum CardSuits{
//     CIRCLE = 1,
//     SQUARE = 2,
//     LINES = 3,
// }

export interface CardType{
    id: number,
    card_id?: number,
    title: string,
    lvl: number,
    img: string,
    suit: 1|2|3,
}

export interface CardProps extends CardType{
    onClick?: () => void;
    chosen?: boolean;
}

export interface CardState extends Array<CardType>{}
