import { configureStore, Tuple } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;

export default store;