import styles from './Card.module.scss';
import type { CardProps } from "../../model/types.ts";
import { UPLOAD_URL } from "@/shared/utils"
import {memo} from "react";


function Card({title, lvl, img, onClick, chosen}:CardProps){

    const clickableClass = onClick ? styles.isClickable : '';
    const chosenClass = chosen ? styles.isChosen : '';
    const img_url = UPLOAD_URL + img;
    
    return(
        <li className={styles.cardWrapper}>
            <div className={`${styles.card} ${clickableClass} ${chosenClass}`} onClick = { () => onClick?.() }>
                <div className={styles.front}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.img} style={{  backgroundImage: `url(${img_url})`  }}></div>
                    <div className={styles.lvl}>Lvl: {lvl}</div>
                </div>
                <div className={styles.back}>
                    <div className={styles.bg}></div>
                </div>
            </div>
        </li>
    )
}

export default memo(Card);