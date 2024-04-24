import styles from './MobileMenu.module.scss'
import { NavLink } from "react-router-dom";
import {useContext, useState} from "react";
import {ThemeContext} from "@/shared/theme";
import {useTokenLinks} from "@/shared/hooks";
import {ThemeSwitcher} from "@/shared/ui";

interface Props{
    userBlock: React.ReactNode
}

export function MobileMenu({userBlock}:Props) {
    const [opened, setOpened] = useState(false);
    const LINKS = useTokenLinks();
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.menu} ${styles[theme]}`}>
            <div className={styles.header}>
                {userBlock}
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
