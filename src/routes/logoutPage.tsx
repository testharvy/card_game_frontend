import { redirect } from "react-router-dom";
import store from "../store";
import {setCards} from "../store/reducers/CardSlice.ts";
import {clearUser, setToken} from "../store/reducers/UserSlice.ts";

export async function loader() {
    localStorage.setItem('token', '');
    store.dispatch(setCards([]));
    store.dispatch(setToken(''));
    store.dispatch(clearUser());
    return redirect("/login");
}