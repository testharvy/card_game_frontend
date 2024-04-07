import {
    Outlet,
    useNavigation,
} from "react-router-dom";
import Aside from "../components/Aside/Aside.tsx";
import MobileMenu from "../components/MobileMenu/MobileMenu.tsx";
import ErrorPopup from "../components/ErrorPopup/ErrorPopup.tsx";
import {useTypedDispatch, useTypedSelector} from "../hooks/typeHooks.ts";
import {useEffect, useState} from "react";
import {fetchUser} from "../store/actions/user.ts";
import {setToken} from "../store/reducers/UserSlice.ts";
import { useMediaQuery } from 'react-responsive';
import { createContext } from 'react';


interface ContextValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextValue >({theme:'darkTheme', setTheme:()=>{}});
// export const ThemeContext = createContext('dark');


export default function Root() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigation = useNavigation();
    const token = useTypedSelector(state=>state.user.token);
    const [theme, setTheme] = useState<string>('darkTheme');
    const dispatch = useTypedDispatch();

    useEffect(()=>{
        const savedToken = localStorage.getItem("token");
        if(savedToken){
            dispatch(setToken(savedToken));
        }

    }, [])

  useEffect(()=>{
      if(token){
          dispatch(fetchUser());
      }
  }, [token])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {isMobile?  <MobileMenu/> : <Aside/>}
        <div id="detail" className={navigation.state === "loading" ? `content loading ${theme}` : `content ${theme}`}>
            <Outlet />
        </div>
        <ErrorPopup></ErrorPopup>
    </ThemeContext.Provider>
  );
}


