import {UserAction, UserActionsTypes, UserState} from '../../types/user.ts';

const userInit:UserState = {
    name: '',
    coins: 0
}

export function userReducer(state = userInit, action:UserAction):UserState {
    switch (action.type) {
        case UserActionsTypes.CHANGE_NICKNAME:
            return { ...state, name: action.name};
        case UserActionsTypes.CHANGE_COINS:
            return { ...state, coins:action.value};
        case UserActionsTypes.CLEAR_USER:
            return userInit;
        default:
            return state;
    }
}
