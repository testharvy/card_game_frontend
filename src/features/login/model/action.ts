import store from "@/app/store.ts";
import {fetchToken, loginData} from "@/entities/user";

export const LoginAction = async (formData:loginData ) => {
    await store.dispatch(fetchToken(formData));
    return store.getState().user.token!=''
}
