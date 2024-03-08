import {ErrorAction, ErrorActionsTypes} from "../../types/error.ts";

export function changeError(value:string):ErrorAction {
    return { type: ErrorActionsTypes.CHANGE_ERROR, value };
}
