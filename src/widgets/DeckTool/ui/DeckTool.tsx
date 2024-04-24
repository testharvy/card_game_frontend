import {memo, useContext} from "react";
import {Index} from "@/features/combineCards";
import {Card} from "@/entities/card";
import type {CardProps} from "@/entities/card";
import {ThemeContext} from "@/shared/theme";
import styles from "./DeckTool.module.scss"

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
                <Index onClick={onClick} cardsQuantity={cards.length}></Index>
                <ul className={styles.list}>
                    {listItems}
                </ul>
            </>
        </div>
    )
}

export default memo(DeckTool);