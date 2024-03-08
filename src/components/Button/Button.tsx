import styles from './Button.module.css'
import {ReactNode} from "react";

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode ,
}
//
export default function Button({onClick,children}:ButtonProps ){
    return(
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={onClick}>{children}</button>
        </div>

    )
}