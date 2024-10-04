import styles from './Button.module.scss'
import {ReactNode, useContext} from "react";
import {ThemeContext} from "@/shared/theme";

interface Props{
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode,
    buttonClass?: 'default'|'width100',
    disabled?: boolean,
}
//
export function Button({onClick, children, buttonClass='default', disabled=false}:Props ){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.wrapper} ${styles[buttonClass]}`}>
            <button
                className={`${styles.button} ${styles[theme]} ${disabled ? styles.disabled : ''}`}
                onClick={onClick}
                disabled={disabled}
            >{children}</button>
        </div>

    )
}