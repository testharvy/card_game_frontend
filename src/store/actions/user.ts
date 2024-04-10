import {AppDispatch, RootState} from "../index.ts";
import axios from "axios";
import {API_URL, getConfig} from "./index.ts";
import {setCards} from "../reducers/CardSlice.ts";
import {dispatchErrorHelper} from "./helpers.ts";
import {CardType} from "../../types/card.ts";
import {setUserFetchingStatus, changeCoins, changeNickname, setToken} from "../reducers/UserSlice.ts";


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

export interface freeCoinsData{
    msg: string;
    coins: number;
}

export function freeCoins() {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            dispatch(setUserFetchingStatus(false));
            const config = getConfig(getState);
            const response = await axios.post<freeCoinsData>(API_URL + 'free-coins/',{} , config).catch();
            dispatch(changeCoins(response.data.coins));
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

export function fetchToken(formData:FormData) {
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