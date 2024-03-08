import Card from "../Card/Card.tsx";
import styles from "./DeckTool.module.css"
import Button from "../Button/Button.js";
import {CardProps} from "../../types/card.ts";
import {memo} from "react";

export interface DeckToolProps{
    cards: CardProps[];
    onClick: () => void;
}

function DeckTool({cards, onClick}:DeckToolProps){

    const listItems = cards.map((el) =>
        <Card key={el.id} id={el.id} suit={el.suit} title={el.title} lvl={el.lvl} img={el.img}></Card>
    );

    // console.log('render DeckTool');
    return(
        <div className={styles.wrapper}>
            <>
                <h2 className={styles.title}>Выбраны:</h2>
                {cards.length==0 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Купить(-100)</Button>
                </div>}
                {cards.length==1 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Уничтожить(+50)</Button>
                </div>}
                {cards.length==2 && <div className={styles.button} onClick={() => onClick()}>
                    <Button>Объединить(0)</Button>
                </div>}

                <ul className={styles.list}>
                    {listItems}
                </ul>

            </>

        </div>
    )
}

export default memo(DeckTool);