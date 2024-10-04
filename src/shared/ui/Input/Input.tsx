import styles from "./Input.module.scss";
import {useContext} from "react";
import {ThemeContext} from "@/shared/theme";

interface Props{
    type: string,
    value?: string | number | readonly string[],
    onChange: ()=>void,
    placeholder: string,
    error?: string,
}

export function Input({type="text", value, onChange, placeholder='', error }:Props) {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={styles.inputWrapper}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.input} ${styles[theme]}`}
            />
            { error && <div className={styles.error}>{error}</div>  }
        </div>

    );
}