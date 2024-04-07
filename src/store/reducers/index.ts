import { combineReducers } from 'redux';
import errorSlice from "./ErrorSlice.ts";
import userSlice from "./UserSlice.ts";
import cardSlice from "./CardSlice.ts";

const rootReducer = combineReducers({
    user: userSlice,
    error: errorSlice,
    cards: cardSlice,
})

export default rootReducer;