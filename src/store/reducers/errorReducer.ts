import {
    ErrorAction,
    ErrorActionsTypes,
} from '../../types/error.ts';

export function errorReducer(state = '', action:ErrorAction):string {
    switch (action.type) {
        case ErrorActionsTypes.CHANGE_ERROR:
            return action.value;
        default:
            return state;
    }
}