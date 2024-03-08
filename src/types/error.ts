export enum ErrorActionsTypes{
    CHANGE_ERROR = 'CHANGE_ERROR'
}

export interface ErrorAction{
    type: ErrorActionsTypes.CHANGE_ERROR,
    value: string,
}