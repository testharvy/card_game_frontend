import { combineReducers } from 'redux';
import {tokenReducer} from './tokenReducer.ts'
import {userReducer} from './userReducer.ts'
import {errorReducer} from "./errorReducer.ts";
import {cardReducer} from "./cardReducer.ts";

const rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    error: errorReducer,
    cards: cardReducer,
})

export default rootReducer;