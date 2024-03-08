import {
    Outlet,
    useNavigation,
} from "react-router-dom";
import Aside from "../components/Aside/Aside.tsx";
import MobileMenu from "../components/MobileMenu/MobileMenu.tsx";
import ErrorPopup from "../components/ErrorPopup/ErrorPopup.tsx";
import {useTypedDispatch, useTypedSelector} from "../hooks/typeHooks.ts";
import {useEffect} from "react";
import {fetchUser} from "../store/actions/user.ts";
import {changeToken} from "../store/actions/token.ts";
import { useMediaQuery } from 'react-responsive'

export default function Root() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigation = useNavigation();
    const token = useTypedSelector(state=>state.token);
    const dispatch = useTypedDispatch();

    useEffect(()=>{
        const savedToken = localStorage.getItem("token");
        if(savedToken){
            dispatch(changeToken(savedToken));
        }
    //     если токен плохой?
    }, [])

  useEffect(()=>{
      if(token){
          dispatch(fetchUser());
      }
  }, [token])

  return (
    <>
        {isMobile?  <MobileMenu></MobileMenu> : <Aside></Aside>}
        <div id="detail" className={navigation.state === "loading" ? "content loading" : "content"}>
            <Outlet />
        </div>
        <ErrorPopup></ErrorPopup>
    </>
  );
}


