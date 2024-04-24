import styles from './Button.module.scss'
import {ReactNode, useContext} from "react";
import {ThemeContext} from "@/shared/theme";

interface Props{
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode ,
}
//
export function Button({onClick,children}:Props ){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={styles.wrapper}>
            <button className={`${styles.button} ${styles[theme]}`} onClick={onClick}>{children}</button>
        </div>

    )
}