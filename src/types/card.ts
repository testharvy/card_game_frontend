export const enum CardActionsTypes{
    SET_CARDS = 'SET_CARDS',
    ADD_CARD = 'ADD_CARD',
    REMOVE_CARD = 'REMOVE_CARD',
    CLEAR_CARDS = 'CLEAR_CARDS',
}
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
