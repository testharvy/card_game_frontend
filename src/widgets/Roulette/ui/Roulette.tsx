import { useState} from "react";
import {fetchBuyCard} from "@/entities/card";
import type {CardProps, CardType} from "@/entities/card";
import {Card} from "@/entities/card";
import {Button} from "@/shared/ui";
import {useTypedDispatch} from "@/shared/hooks";

import styles from './Roulette.module.scss'

export function Roulette() {
    const [rotate, setRotate] = useState(0);
    const [transition, setTransition] = useState(false);
    const disabledButton = transition;
    const dispatch = useTypedDispatch();
    const [deck, setDeck] = useState<CardProps[]>([])

    function handleClick(){
        if(disabledButton){return}
        //получаем результат сразу, но показываем после вращения
        dispatch(fetchBuyCard()).then(
            (res:CardType) =>
            {
                const optionsCount = 3;
                const sectorAngle = 360/optionsCount;
                // const rand = 2;
                // console.log(res);
                const rand = res.suit;
                setDeck([...deck, res]);
                const randDeg = (rand-1)*sectorAngle;
                setTransition(true);
                setRotate(-randDeg + 1800);
                setTimeout(() => {
                    setTransition(false);
                    setRotate(-randDeg);
                }, 2000);
            }
        );


    }



    return(
        <div className={styles.container}>
            <div className={styles.wheelWrapper}>
                <div className={`${styles.wheel} ${transition ? styles.transition : ''}`}
                     style={{transform: `rotate(`+rotate+`deg)`}}>
                    <div className={styles.item}>Круги зел</div>
                    <div className={styles.item}>Квадраты кр</div>
                    <div className={styles.item}>Линии син</div>
                    <div className={styles.item}>Круги зел</div>
                    <div className={styles.item}>Квадраты кр</div>
                    <div className={styles.item}>Линии син</div>
                </div>
                <div className={styles.arrow}></div>
            </div>

            <div className={styles.side}>

            </div>
            <Button onClick={handleClick}> Вращять</Button>
            { deck.length > 0 &&
                <>
                    <div className={styles.result}>Полученные карты:</div>
                    <ul className={styles.deck}>
                        {deck.map((el) => {
                            return (
                                <Card key={el.id} id={el.id} card_id={el.card_id} suit={el.suit} title={el.title} lvl={el.lvl} img={el.img}></Card>
                            )}
                        )}
                    </ul>
                </>
            }


        </div>
    )
}