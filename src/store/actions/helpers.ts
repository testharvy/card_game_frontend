import axios from "axios";
import {changeError} from "../reducers/ErrorSlice.ts";
import {AppDispatch} from "../index.ts";

export function dispatchErrorHelper(err:unknown, dispatch:AppDispatch){
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