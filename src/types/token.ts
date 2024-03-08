export enum TokenActionsTypes{
    CHANGE_TOKEN = 'CHANGE_TOKEN'
}

export interface TokenAction{
    type: TokenActionsTypes.CHANGE_TOKEN,
    value: string,
}