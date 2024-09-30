import axios from "axios";
// нарушение FSD
import {changeError} from "@/entities/error";
import {AppDispatch} from "@/app/store.ts";

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