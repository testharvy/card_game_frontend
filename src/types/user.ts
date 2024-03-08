export enum UserActionsTypes{
    CHANGE_NICKNAME = 'CHANGE_NICKNAME',
    CHANGE_COINS = 'CHANGE_COINS',
    FETCH_USER = 'FETCH_USER',
    CLEAR_USER = 'CLEAR_USER',
}

export interface UserState{
    name: string;
    coins: number;
}

interface ChangeNicknameAction{
    type: UserActionsTypes.CHANGE_NICKNAME,
    name: string,
}
interface ChangeCoinsAction{
    type: UserActionsTypes.CHANGE_COINS,
    value: number,
}

interface FetchUserAction{
    type: UserActionsTypes.FETCH_USER,
}

interface ClearUserAction{
    type: UserActionsTypes.CLEAR_USER,
}

export type UserAction = ChangeNicknameAction | ChangeCoinsAction | FetchUserAction | ClearUserAction;
