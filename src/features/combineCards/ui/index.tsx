import {useContext} from "react";
import {ThemeContext} from "@/shared/theme";
import {Button} from "@/shared/ui";
import styles from "./index.module.scss"

export interface CombineCardsProps{
    cardsQuantity: number;
    onClick: () => void;
}

export function Index({cardsQuantity, onClick}:CombineCardsProps){
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`${styles.wrapper} ${styles[theme]}`}>
                <h2 className={styles.title}>Выбраны:</h2>
                {cardsQuantity==0 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Купить</Button>
                </div>}
                {cardsQuantity==1 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Уничтожить</Button>
                </div>}
                {cardsQuantity==2 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Объединить</Button>
                </div>}
        </div>
    )
}