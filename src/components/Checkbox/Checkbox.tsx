import styles from './Checkbox.module.css'
import React from "react";

type Props = {
    name: string,
    value: string,
    checked: boolean,
    text: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({name, value, checked, text, onChange}:Props ){
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