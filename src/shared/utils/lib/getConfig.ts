// нарушение FSD
import {RootState} from "@/app/store.ts";

export const API_URL:string = 'https://testharvy.pythonanywhere.com/api/'
export const UPLOAD_URL:string = 'https://testharvy.pythonanywhere.com/'

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