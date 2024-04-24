import axios from "axios";
import {AppDispatch, RootState} from "@/app/store.ts";
import {changeCoins, setUserFetchingStatus} from "@/entities/user";
import {API_URL, getConfig} from "@/shared/utils";
import {dispatchErrorHelper} from "@/shared/utils";

export interface freeCoinsData{
    msg: string;
    coins: number;
}

export function freeCoinsAction() {
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