import styles from './Checkbox.module.scss'
import React from "react";

interface Props{
    name: string,
    value: string,
    checked: boolean,
    text: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({name, value, checked, text, onChange}:Props ){
    return(
        <>
            <label className={styles.label}>
                <input type="radio"
                       name={name}
                       value={value}
                       checked={checked}
                       onChange={onChange} />
                {text}
            </label>
        </>
    )
}