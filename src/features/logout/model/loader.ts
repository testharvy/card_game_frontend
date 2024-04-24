import { redirect } from "react-router-dom";
import store from "@/app/store.ts";
import {setCards} from "@/entities/card";
import {clearUser, setToken} from "@/entities/user";

export async function LogoutLoader() {
    localStorage.setItem('token', '');
    store.dispatch(setCards([]));
    store.dispatch(setToken(''));
    store.dispatch(clearUser());
    return redirect("/login");
}