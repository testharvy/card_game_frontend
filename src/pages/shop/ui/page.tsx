import {CardType} from "@/entities/card";
import styles from "./page.module.scss";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/shared/theme";
import {BuyCardItem} from "@/features/buyCard";
import axios from "axios";
import {API_URL} from "@/shared/utils";
import {useTypedSelector} from "@/shared/hooks";


interface ShopItemType{
    id: number,
    price: number,
    discountPrice: number,
    card: CardType,
}

interface fetchData{
    list: ShopItemType[],
}

export function ShopPage() {
    const {theme} = useContext(ThemeContext);
    const token = useTypedSelector(state => state.user.token );
    const hasUser = token != '';
    const [cards, setCards] = useState<ShopItemType[]>([])

    useEffect(() => {
        async function fetchAPI() {
            const result = await axios.get<fetchData>(API_URL + 'shop/list').then(res=> res.data.list);
            setCards(result)
        }
        fetchAPI()
    }, []);
    
    return (
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} ${styles[theme]}`}>Магазин</h1>
            <div className={`${styles.cards} ${styles[theme]}`}>
                {cards.map((item)=> <BuyCardItem key={item.id} id={item.id} card={item.card} price={item.price} discountPrice={item.discountPrice} hasUser={hasUser}/>)}
            </div>
        </div>
    );
}