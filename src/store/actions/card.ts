import {CardAction, CardActionsTypes, CardState, CardType} from "../../types/card.ts";
import {Dispatch} from "redux";
import {RootState} from "../index.ts";
import axios from "axios";
import {API_URL, getConfig} from "./index.ts";
import {changeCoins} from "./user.ts";
import {UserAction} from "../../types/user.ts";
import {dispatchErrorHelper} from "./helpers.ts";


export function setCards(cards:CardState):CardAction {
    return { type: CardActionsTypes.SET_CARDS, cards};
}

export function removeCard(cardId:number):CardAction {
    return { type: CardActionsTypes.REMOVE_CARD, cardId };
}

export function addCard(card:CardType):CardAction {
    return { type: CardActionsTypes.ADD_CARD, card };
}

export function clearCards():CardAction {
    return { type: CardActionsTypes.CLEAR_CARDS };
}

export function fetchBuyCard() {
    return async (dispatch:Dispatch<CardAction|UserAction>, getState: () => RootState) => {
        try {
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'buy/',{} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(addCard(response.data.card));
            return response.data.card;
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}

export function fetchSellCard(cardId:number) {
    return async (dispatch:Dispatch<CardAction|UserAction>, getState: () => RootState) => {
        try {
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'destroy/',{"cardId": cardId} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(removeCard(cardId));
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}


export function fetchCombineCards(cardIds:number[]) {
    return async (dispatch:Dispatch<CardAction|UserAction>, getState: () => RootState) => {
        try {
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'combine/',{"cardIds": cardIds} , config).catch();
            cardIds.forEach((id)=>{dispatch(removeCard(id))});

            // пауза чтоб старые карты успели исчезнуть перед появлением новой
            setTimeout(() => {
                dispatch(addCard(response.data.card));
            }, 500);
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}
