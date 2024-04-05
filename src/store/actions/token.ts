import {Dispatch} from "redux";
import {TokenAction, TokenActionsTypes} from "../../types/token.ts";
import {API_URL} from "./index.ts";
import axios from "axios";
import {dispatchErrorHelper} from "./helpers.ts";

export function changeToken(value:string):TokenAction {
    return { type: TokenActionsTypes.CHANGE_TOKEN, value };
}

export function fetchToken(formData:FormData) {
    return async (dispatch:Dispatch<TokenAction>) => {
        try {
            //dispatch start fetch success
            const response = await axios.post(API_URL + 'api-token-auth/', formData);
            const newToken:string = response.data.token;
            localStorage.setItem('token', newToken);
            dispatch({type: TokenActionsTypes.CHANGE_TOKEN, value:newToken});
            //dispatch success
        }catch (err){
            dispatchErrorHelper(err, dispatch);
        }
    }
}