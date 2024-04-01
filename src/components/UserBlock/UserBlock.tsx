import styles from "./UserBlock.module.css";
import Button from "../Button/Button.tsx";
import {freeCoins} from "../../store/actions/user.ts";
import {useTypedDispatch, useTypedSelector} from "../../hooks/typeHooks.ts";
import {useContext} from "react";
import {ThemeContext} from "../../routes/root.tsx";


export default function UserBlock(){
    const token = useTypedSelector(state => state.token );
    const {name, coins} = useTypedSelector(state => state.user );
    const dispatch = useTypedDispatch();
    const {theme} = useContext(ThemeContext);

    return(
        <>
            { token!='' &&
                <div className={styles.wrapper}>
                    <div className={styles.data}>
                        <div className={styles.row}>
                            <svg className={`${styles.icon} ${styles.user} ${styles[theme]}`} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="512" height="512"><g><circle cx="256" cy="128" r="128"/><path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z"/></g></svg>
                            {name}
                        </div>
                        <div className={styles.row}>
                            <svg className={`${styles.icon} ${styles.coins} ${styles[theme]} `} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M16.5,0c-4.206,0-7.5,1.977-7.5,4.5v2.587c-.484-.057-.985-.087-1.5-.087C3.294,7,0,8.977,0,11.5v8c0,2.523,3.294,4.5,7.5,4.5,3.416,0,6.231-1.304,7.167-3.146,.597,.087,1.207,.146,1.833,.146,4.206,0,7.5-1.977,7.5-4.5V4.5c0-2.523-3.294-4.5-7.5-4.5Zm0,2c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM7.5,9c3.148,0,5.5,1.32,5.5,2.5s-2.352,2.5-5.5,2.5-5.5-1.32-5.5-2.5,2.352-2.5,5.5-2.5ZM2,14.582c1.36,.875,3.303,1.418,5.5,1.418s4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5s-5.5-1.32-5.5-2.5v-.918Zm5.5,7.418c-3.148,0-5.5-1.32-5.5-2.5v-.918c1.36,.875,3.303,1.418,5.5,1.418s4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm9-3c-.514,0-1.012-.047-1.5-.116v-1.98c.492,.058,.99,.096,1.5,.096,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm0-4c-.514,0-1.012-.047-1.5-.116v-1.98c.492,.058,.99,.096,1.5,.096,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Zm0-4c-.542,0-1.066-.051-1.578-.127-.198-.887-.809-1.684-1.721-2.321,.992,.285,2.106,.449,3.299,.449,2.197,0,4.14-.543,5.5-1.418v.918c0,1.18-2.352,2.5-5.5,2.5Z"/></svg>
                            {coins}
                        </div>
                    </div>
                    <Button onClick={()=>dispatch(freeCoins())} >freeCoins</Button>
                </div>
            }
        </>

    )
}