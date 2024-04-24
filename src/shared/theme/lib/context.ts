import {createContext} from "react";

interface ContextValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ContextValue >({theme:'darkTheme', setTheme:()=>{}});