import { redirect } from "react-router-dom";
import store from "../store";
import {changeToken} from "../store/actions/token.ts";
import {clearCards} from "../store/actions/card.ts";
import {clearUser} from "../store/actions/user.ts";

export async function loader() {

    // store.dispatch(logout());
    localStorage.setItem('token', '');
    store.dispatch(changeToken(''));
    store.dispatch(clearCards());
    store.dispatch(clearUser());
    return redirect("/login");
}