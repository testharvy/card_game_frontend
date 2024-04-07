import {AppDispatch, RootState} from "../index.ts";
import axios from "axios";
import {API_URL, getConfig} from "./index.ts";
import {changeCoins} from "../reducers/UserSlice.ts";
import {dispatchErrorHelper} from "./helpers.ts";
import {addCard, removeCard} from "../reducers/CardSlice.ts";

export function fetchBuyCard() {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
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
    return async (dispatch:AppDispatch, getState: () => RootState) => {
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
    return async (dispatch:AppDispatch, getState: () => RootState) => {
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
