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

interface SetCardsAction{
    type: CardActionsTypes.SET_CARDS,
    cards: CardState,
}
interface AddCardAction{
    type: CardActionsTypes.ADD_CARD,
    card: CardType,
}

interface RemoveCardAction{
    type: CardActionsTypes.REMOVE_CARD,
    cardId: number
}

interface ClearCardsAction{
    type: CardActionsTypes.CLEAR_CARDS
}


export type CardAction = SetCardsAction | AddCardAction | RemoveCardAction | ClearCardsAction;