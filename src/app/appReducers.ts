import { combineReducers } from 'redux';
import errorSlice from "@/entities/error/model/slice.ts";
import userSlice from "@/entities/user/model/slice.ts";
import cardSlice from "@/entities/card/model/slice.ts";

const rootReducer = combineReducers({
    user: userSlice,
    error: errorSlice,
    cards: cardSlice,
})

export default rootReducer;