
import {UserAction, UserActionsTypes} from "../../types/user.ts";
import {Dispatch} from "redux";
import axios from "axios";
import {API_URL} from "./index.ts";
import {RootState} from "../index.ts";
import {CardAction} from "../../types/card.ts";
import {setCards} from "./card.ts";
import {dispatchErrorHelper} from "./helpers.ts";

export function changeNickname(name:string):UserAction {
    return { type: UserActionsTypes.CHANGE_NICKNAME, name };
}
export function changeCoins(value:number):UserAction {
    return { type: UserActionsTypes.CHANGE_COINS, value };
}

export function clearUser():UserAction {
    return { type: UserActionsTypes.CLEAR_USER};
}

export function fetchUser() {
    return async (dispatch:Dispatch<UserAction|CardAction>, getState: () => RootState) => {
        try {
            const token = getState().token;
            const config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Token '+token,
                }
            }
            const response = await axios.get(API_URL + 'me/', config).catch();
            dispatch(changeNickname(response.data.nickname));
            dispatch(changeCoins(response.data.coins));
            dispatch(setCards(response.data.cards));
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}

export function freeCoins() {
    return async (dispatch:Dispatch<UserAction>, getState: () => RootState) => {
        try {
            const token = getState().token;
            const config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Token '+token,
                }
            }
            const response = await axios.post(API_URL + 'free-coins/',{} , config).catch();
            dispatch({type: UserActionsTypes.CHANGE_COINS, value:response.data.coins});
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}


