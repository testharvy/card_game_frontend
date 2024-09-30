
import {Button} from "@/shared/ui";
import {Card, CardType} from "@/entities/card";
import styles from "./BuyCardItem.module.scss";
import {buyCardAction} from "../model/actions.ts";
import {useTypedDispatch} from "@/shared/hooks";
import {useNavigate } from "react-router-dom";


interface Props{
    id: number,
    card: CardType,
    price: number,
    discountPrice: number,
    hasUser: boolean
}

export function BuyCardItem({id, card, price, discountPrice, hasUser}:Props ) {
    const navigateTo  = useNavigate();
    const hasDiscount = discountPrice!=0;
    const priceSpan  =  hasDiscount ? <><span className={styles.new}>{discountPrice}</span> <span className={styles.old}>{price}</span></> :  <span>{price}</span>
    const dispatch = useTypedDispatch();
    const clickHandler = () =>{
        if(hasUser){
            dispatch(buyCardAction(id))
        }else{
            navigateTo("/login");
        }
    }


    return (
        <div className={styles.wrapper}>
            <Card id={card.id} suit={card.suit} chosen={false} title={card.title}  lvl={card.lvl} img={card.img}></Card>
            {hasDiscount  && <div className={styles.discount }>Скидка </div>}
            <Button buttonClass={'width100'} onClick={clickHandler} >Купить<br/> за {priceSpan}</Button>
        </div>
    );

}

