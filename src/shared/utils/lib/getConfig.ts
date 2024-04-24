// нарушение FSD
import {RootState} from "@/app/store.ts";

export const API_URL:string = 'http://127.0.0.1:8000/api/'
export const UPLOAD_URL:string = 'http://127.0.0.1:8000'

export function getConfig(getState:() => RootState){

    const token = getState().user.token;
    const config = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Token '+token,
        }
    }
    return config;
}