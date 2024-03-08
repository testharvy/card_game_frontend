import {CardAction, CardActionsTypes, CardState, CardType} from "../../types/card.ts";
import {Dispatch} from "redux";
import {ErrorAction} from "../../types/error.ts";
import {RootState} from "../index.ts";
import axios from "axios";
import {API_URL, getConfig} from "./index.ts";
import {changeError} from "./error.ts";
import {changeCoins} from "./user.ts";
import {UserAction} from "../../types/user.ts";

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
    return async (dispatch:Dispatch<CardAction|UserAction|ErrorAction>, getState: () => RootState) => {
        try {
            //dispatch start fetch success
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'buy/',{} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(addCard(response.data.card));
            return response.data.card;
            //dispatch success
        }catch (err){
            //dispatch error
            if (axios.isAxiosError(err)) {
                if(err?.response?.data?.msg){
                    dispatch(changeError(err?.response?.data?.msg));
                }else{
                    dispatch(changeError(err.message));
                }
            } else {
                console.error(err);
            }
        }
    }
}

export function fetchSellCard(cardId:number) {
    return async (dispatch:Dispatch<CardAction|UserAction|ErrorAction>, getState: () => RootState) => {
        try {
            //dispatch start fetch success
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'destroy/',{"cardId": cardId} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(removeCard(cardId));
            //dispatch success
        }catch (err){
            //dispatch error
            if (axios.isAxiosError(err)) {
                if(err?.response?.data?.msg){
                    dispatch(changeError(err?.response?.data?.msg));
                }else{
                    dispatch(changeError(err.message));
                }
            } else {
                console.error(err);
            }
        }
    }
}


export function fetchCombineCards(cardIds:number[]) {
    return async (dispatch:Dispatch<CardAction|UserAction|ErrorAction>, getState: () => RootState) => {
        try {
            //dispatch start fetch success
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'combine/',{"cardIds": cardIds} , config).catch();
            // dispatch(changeCoins(response.data.coins));
            cardIds.forEach((id)=>{dispatch(removeCard(id))});

            setTimeout(() => {
                dispatch(addCard(response.data.card));
            }, 500);


            //dispatch success
        }catch (err){
            //dispatch error
            if (axios.isAxiosError(err)) {
                if(err?.response?.data?.msg){
                    dispatch(changeError(err?.response?.data?.msg));
                }else{
                    dispatch(changeError(err.message));
                }
            } else {
                console.error(err);
            }
        }
    }
}
