import {ActionFunction} from "react-router";
import {redirect} from "react-router-dom";
import store from "@/app/store.ts";
import {fetchToken} from "@/entities/user";


export const LoginAction: ActionFunction = async ({ request }) => {
    const formData:FormData = await request.formData();
    await store.dispatch(fetchToken(formData));
    if(store.getState().user.token!=''){
        return redirect('/cards');
    }else{
        return ''
    }
}
