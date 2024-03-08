import styles from './Card.module.css';
import { CardProps } from "../../types/card.ts";
import { UPLOAD_URL } from "../../store/actions/index.ts"
import {memo} from "react";


function Card({title, lvl, img, onClick, chosen}:CardProps){

    const clicableClass = onClick ? styles.islicable : '';
    const chosenClass = chosen ? styles.isChosen : '';
    const img_url = UPLOAD_URL + img;

    // console.log('rednderCard')
    return(
        <li className={styles.cardWrapper}>
            <div className={`${styles.card} ${clicableClass} ${chosenClass}`} onClick = { () => onClick?.() }>
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