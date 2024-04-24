import {
    Outlet,
    useNavigation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Aside } from "@/widgets/Aside";
import {UserBlock} from "@/widgets/UserBlock";
import { MobileMenu } from "@/widgets/MobileMenu";
import { fetchUser } from "@/entities/user";
import { setToken } from "@/entities/user";
import { ErrorPopup } from "@/entities/error";
import { useTypedDispatch, useTypedSelector } from "@/shared/hooks";
import { ThemeContext } from "@/shared/theme";



export function RootLayout() {
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
        {isMobile?  <MobileMenu userBlock={<UserBlock/>}/> : <Aside userBlock={<UserBlock/>}/>}
        <div id="detail" className={navigation.state === "loading" ? `content loading ${theme}` : `content ${theme}`}>
            <Outlet />
        </div>
        <ErrorPopup></ErrorPopup>
    </ThemeContext.Provider>
  );
}


