import styles from './MobileMenu.module.css'
import { NavLink } from "react-router-dom";
import Button from "../Button/Button.tsx";
import { useTypedSelector, useTypedDispatch } from '../../hooks/typeHooks.ts'
import {freeCoins} from "../../store/actions/user.ts";
import {useContext, useState} from "react";
import {LINKS_FOR_AUTH, LINKS_FOR_NOT_AUTH} from "../CardList/CardList.tsx";
import {ThemeContext} from "../../routes/root.tsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx";

export default function MobileMenu() {
    const [opened, setOpened] = useState(false);
    const token = useTypedSelector(state => state.token );
    const {name, coins} = useTypedSelector(state => state.user );
    const LINKS = (token!='') ? LINKS_FOR_AUTH : LINKS_FOR_NOT_AUTH;
    const dispatch = useTypedDispatch();
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.menu} ${styles[theme]}`}>
            <div className={styles.header}>
                { token!='' &&
                    <div className={styles.user}>
                        <div>{name}</div>
                        <div>{coins}</div>
                        <Button onClick={()=>dispatch(freeCoins())} >freeCoins</Button>
                    </div>
                }
                <div className={styles.controls}>
                    <div className={styles.switcherWrapper}><ThemeSwitcher></ThemeSwitcher></div>

                    <div className={styles.burgerWrapper} onClick={()=>setOpened(!opened)}>
                        <div className={`${styles.burger} ${opened? styles.open:''}`}></div>
                    </div>
                </div>


            </div>
            <div  className={`${styles.body} ${opened? styles.open:''}`}>
                <nav>
                    <ul className={styles.links}>
                        {LINKS.map((link)=>(
                            <li key={link.id}><NavLink
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                                to={link.url}  onClick={()=>setOpened(!opened)}>{link.name}</NavLink></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
