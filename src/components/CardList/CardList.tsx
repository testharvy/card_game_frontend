import Card from '../Card/Card.tsx';
import styles from './CardList.module.scss';
import React, {useState, createRef, useCallback, useMemo} from "react";
import {CardProps, CardState} from "../../types/card.ts";
import {useTypedDispatch, useTypedSelector} from "../../hooks/typeHooks.ts";
import DeckTool from "../DeckTool/DeckTool.tsx";
import {fetchBuyCard, fetchSellCard, fetchCombineCards} from "../../store/actions/card.ts"
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Checkbox from "../Checkbox/Checkbox.tsx";
import {useContext} from "react";
import {ThemeContext} from "../../routes/root.tsx";

const enum SORTING{
    'noSort'= 'noSort',
    'byLvl' = 'byLvl',
    'bySuit' = 'bySuit',
}

export interface LINK{
    id: number,
    url: string,
    name: string,
}

export const LINKS_FOR_NOT_AUTH:LINK[] = [
    {id:1, url: '/', name: 'Главная'},
    {id:3, url: 'rules', name: 'Правила'},
    {id:2, url: 'login', name: 'Логин'},
]

export const LINKS_FOR_AUTH:LINK[] = [
    {id:1, url: '/', name: 'Главная'},
    {id:2, url: 'rules', name: 'Правила'},
    {id:4, url: 'cards', name: 'Карты'},
    {id:5, url: 'roulette', name: 'Рулетка'},
    {id:7, url: 'logout', name: 'Выйти'},
]

function CardList() {
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

    function changeSorting(event: React.ChangeEvent<HTMLInputElement>) {
        setSorting(event.target.value);
    }

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
                <div className={styles.sort}> <span className={styles.sortTitle}>Сортировка:</span>
                    <div className={styles.options}>
                        <Checkbox name={'sort'} value={SORTING.noSort} checked={sorting == SORTING.noSort} text={'Без сортировки'} onChange={changeSorting}></Checkbox>
                        <Checkbox name={'sort'} value={SORTING.bySuit} checked={sorting == SORTING.bySuit} text={'По масти'} onChange={changeSorting}></Checkbox>
                        <Checkbox name={'sort'} value={SORTING.byLvl} checked={sorting == SORTING.byLvl} text={'По уровню'} onChange={changeSorting}></Checkbox>
                    </div>
                </div>
            </div>

            <TransitionGroup className={styles.list}>
                {deck.map((el) => {
                  const chosen = chosenCards.indexOf(el.id)!=-1;
                  const nodeRef = createRef<HTMLDivElement>();
                    return (
                        <CSSTransition
                            key={el.id}
                            nodeRef={nodeRef}
                            timeout={500}
                            classNames="my-node"
                            mountOnEnter
                            unmountOnExit
                        >
                            <div className={'my-node'} ref={nodeRef}>
                                <Card id={el.id} suit={el.suit} title={el.title} chosen={chosen} lvl={el.lvl} img={el.img} onClick={el.onClick}></Card>
                            </div>

                        </CSSTransition>
                    )}
                )}
            </TransitionGroup>
            <DeckTool cards={chosenDeck} onClick={handleCombineClick}></DeckTool>
        </div>
    );

}

export default CardList;

