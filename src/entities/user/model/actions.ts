import axios from "axios";
import {AppDispatch, RootState} from "@/app/store.ts";
import {API_URL, getConfig, dispatchErrorHelper} from "@/shared/utils";
import {setUserFetchingStatus, changeCoins, changeNickname, setToken} from "./slice.ts";
import {setCards} from "../../card/model/slice.ts";
import type {CardType} from "../../card/model/types.ts";


export interface userFetchData{
    nickname: string;
    coins: number;
    cards: CardType[];
}

export function fetchUser() {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const config = getConfig(getState);
            const response = await axios.get<userFetchData>(API_URL + 'me/', config).catch();
            dispatch(changeNickname(response.data.nickname));
            dispatch(changeCoins(response.data.coins));
            dispatch(setCards(response.data.cards));
        } catch (err) {
            dispatchErrorHelper(err, dispatch);
        } finally {
            dispatch(setUserFetchingStatus(true));
        }
    }
}

export interface fetchTokenData{
    token: string;
}

export interface loginData{
    username: string;
    password: string;
}

export function fetchToken(formData:loginData) {
    return async (dispatch:AppDispatch) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const response = await axios.post<fetchTokenData>(API_URL + 'api-token-auth/', formData);
            const newToken:string = response.data.token;
            localStorage.setItem('token', newToken);
            dispatch(setToken(newToken))
        } catch (err) {
            dispatchErrorHelper(err, dispatch);
        } finally {
            dispatch(setUserFetchingStatus(true));
        }
    }
}