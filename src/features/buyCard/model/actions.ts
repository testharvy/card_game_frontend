import {AppDispatch, RootState} from "@/app/store.ts";
import {changeCoins, setUserFetchingStatus} from "@/entities/user";
import {API_URL, dispatchErrorHelper, getConfig} from "@/shared/utils";
import axios from "axios";
import {changeError} from "@/entities/error";
import {addCard, CardType} from "@/entities/card";

interface buyCardData{
    coins: number;
    card: CardType;
}

export function buyCardAction(id:number) {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const config = getConfig(getState);
            const response = await axios.post<buyCardData>(API_URL + 'shop/buy',{id:id} , config).catch();
            dispatch(changeCoins(response.data.coins));
            dispatch(addCard(response.data.card));
            dispatch(changeError('Успешная покупка'));
        } catch (err) {
            dispatchErrorHelper(err, dispatch);
        } finally {
            dispatch(setUserFetchingStatus(true));
        }
    }
}