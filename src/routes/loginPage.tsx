import LoginForm from "../components/LoginForm/LoginForm.tsx";
import type { ActionFunction } from "react-router";
import {fetchToken} from "../store/actions/user.ts";
import store from "../store";
import { redirect } from "react-router-dom";


export const action: ActionFunction = async ({ request }) => {
    const formData:FormData = await request.formData();
    await store.dispatch(fetchToken(formData));
    if(store.getState().user.token!=''){
        return redirect('/cards');
    }else{
        return ''
    }
}

export default function LoginPage(){
  return (
      <LoginForm />
  );
}