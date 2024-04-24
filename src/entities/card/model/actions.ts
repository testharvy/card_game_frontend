
import axios from "axios";
import {AppDispatch, RootState} from "@/app/store.ts";
import {changeCoins, setUserFetchingStatus} from "@/entities/user";
import {API_URL, getConfig} from "@/shared/utils/lib/getConfig.ts";
import {dispatchErrorHelper} from "@/shared/utils";
import {addCard, removeCard} from "./slice.ts";

export function fetchBuyCard() {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'buy/',{} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(addCard(response.data.card));
            return response.data.card;
        } catch (err) {
            dispatchErrorHelper(err, dispatch);
        } finally {
            dispatch(setUserFetchingStatus(true));
        }
    }
}

export function fetchSellCard(cardId:number) {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const config = getConfig(getState);
            const response = await axios.post(API_URL + 'destroy/',{"cardId": cardId} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(removeCard(cardId));
        } catch (err) {
            dispatchErrorHelper(err, dispatch);
        } finally {
            dispatch(setUserFetchingStatus(true));
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
