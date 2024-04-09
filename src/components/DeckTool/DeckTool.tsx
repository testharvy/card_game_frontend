import Card from "../Card/Card.tsx";
import styles from "./DeckTool.module.scss"
import Button from "../Button/Button.js";
import {CardProps} from "../../types/card.ts";
import {memo, useContext} from "react";
import {ThemeContext} from "../../routes/root.tsx";

export interface DeckToolProps{
    cards: CardProps[];
    onClick: () => void;
}

function DeckTool({cards, onClick}:DeckToolProps){
    const {theme} = useContext(ThemeContext);
    const listItems = cards.map((el) =>
        <Card key={el.id} id={el.id} suit={el.suit} title={el.title} lvl={el.lvl} img={el.img} onClick={el.onClick}></Card>
    );

    // console.log('render DeckTool');
    return(
        <div className={`${styles.wrapper} ${styles[theme]}`}>
            <>
                <h2 className={styles.title}>Выбраны:</h2>
                {cards.length==0 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Купить</Button>
                </div>}
                {cards.length==1 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Уничтожить</Button>
                </div>}
                {cards.length==2 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Объединить</Button>
                </div>}
                <ul className={styles.list}>
                    {listItems}
                </ul>
            </>
        </div>
    )
}

export default memo(DeckTool);