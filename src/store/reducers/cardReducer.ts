import {CardAction, CardActionsTypes, CardState} from '../../types/card.ts';

export function cardReducer(state:CardState = [], action:CardAction):CardState {
    switch (action.type) {
        case CardActionsTypes.SET_CARDS:
            return action.cards
        case CardActionsTypes.ADD_CARD:
            return [
                ...state,
                action.card
            ];
        case CardActionsTypes.REMOVE_CARD:
            return [...state].filter(function (el) {
                return el.id!=action.cardId;
            });
        case CardActionsTypes.CLEAR_CARDS:
            return [];
        default:
            return state;
    }
}
