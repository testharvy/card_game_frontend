import axios from "axios";
import {changeError} from "./error.ts";
import {Dispatch} from "redux";
import {ErrorAction} from "../../types/error.ts";

export function dispatchErrorHelper(err:unknown, dispatch:Dispatch<ErrorAction>){
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