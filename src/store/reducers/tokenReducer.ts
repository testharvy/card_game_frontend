import {
    TokenActionsTypes,
    TokenAction
} from '../../types/token.ts';

export function tokenReducer(state = '', action:TokenAction):string {
    switch (action.type) {
        case TokenActionsTypes.CHANGE_TOKEN:
            return action.value;
        default:
            return state;
    }
}