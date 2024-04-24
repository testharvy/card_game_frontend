import {useCallback, useContext, useMemo, useState} from "react";
import {CardList} from "@/widgets/CardList";
import {DeckTool} from "@/widgets/DeckTool";
import {CardSort, SORTING} from "@/features/cardsSort";
import {useTypedDispatch, useTypedSelector} from "@/shared/hooks";
import { CardState, fetchBuyCard, fetchCombineCards, fetchSellCard} from "@/entities/card";
import type {CardProps} from "@/entities/card";
import {ThemeContext} from "@/shared/theme";
import styles from "./page.module.scss";

export function CardPage() {
    const dispatch = useTypedDispatch();
    const myCards:CardState = useTypedSelector(state => state.cards.cards);
    const [chosenCards, setChosenCards] = useState<number[]>([]);
    const [sorting, setSorting] = useState<string>(SORTING.noSort);
    const [testR, setTestR] = useState(false);
    const {theme} = useContext(ThemeContext);

    function handleClick(i:number) {
        const array = [...chosenCards];
        const index = array.indexOf(i);
        if (index !== -1) {
            array.splice(index, 1);
            setChosenCards(array);
        }else{
            setChosenCards(
                [
                    ...chosenCards,
                    i
                ]
            )
        }
    }

    const handleCombineClick = useCallback( () => {
        console.log('handleCombineClick', chosenCards.length);
        if(chosenCards.length==0){
            dispatch(fetchBuyCard());
        }
        if(chosenCards.length==1){
            dispatch(fetchSellCard( chosenCards[0]));
        }
        if(chosenCards.length==2){
            dispatch(fetchCombineCards(chosenCards));
        }
        setChosenCards([]);
    },[chosenCards])

    const deck:CardProps[] = useMemo(
        () => {
            const result:CardProps[] = [];
            myCards.forEach((el) => {
                const chosen = chosenCards.indexOf(el.id)!=-1;
                const card:CardProps = {...el, chosen:chosen, onClick: (()=>handleClick(el.id))}
                result.push(card);
            });

            if(sorting == SORTING.byLvl){
                result.sort((a,b) => {
                    return a.lvl - b.lvl});
            }
            if(sorting == SORTING.bySuit){
                result.sort((a,b) => {return a.suit - b.suit});
            }

            return result;
        },
        [myCards, chosenCards, sorting]
    );

    // можно ли обойтись без повторного myCards.forEach?
    const chosenDeck:CardProps[] = useMemo(
        () => {
            const result:CardProps[] = [];
            myCards.forEach((el) => {
                const chosen = chosenCards.indexOf(el.id)!=-1;
                if(chosen){
                    const card:CardProps = {...el,  onClick: (()=>handleClick(el.id))}
                    result.push(card);
                }
            });
            return result;
        },
        [myCards, chosenCards]
    );

    // console.log('render CardList');

    return (
        <div className={`${styles.cards} ${styles[theme]}`}>
            <div  className={styles.header}>
                <h1 className={styles.h1}>Мои карты</h1>
                <div style={{color:'red', cursor: 'pointer'}} onClick={()=>setTestR(!testR)}>Тестовый параметр: {testR? 'true' : 'false'}</div>
                <CardSort sorting={sorting} setSorting={setSorting}></CardSort>
            </div>
            <CardList deck={deck} chosenCards={chosenCards} />
            <DeckTool cards={chosenDeck} onClick={handleCombineClick} />
        </div>
    );

}
