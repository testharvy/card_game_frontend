import styles from './Button.module.scss'
import {ReactNode, useContext} from "react";
import {ThemeContext} from "../../routes/root.tsx";

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode ,
}
//
export default function Button({onClick,children}:ButtonProps ){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={styles.wrapper}>
            <button className={`${styles.button} ${styles[theme]}`} onClick={onClick}>{children}</button>
        </div>

    )
}