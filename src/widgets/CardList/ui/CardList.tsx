import {createRef} from "react";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {Card} from "@/entities/card";
import type {CardProps} from "@/entities/card";
import styles from './CardList.module.scss';


interface Props{
    deck: CardProps[];
    chosenCards: number[];
}

export function CardList({deck, chosenCards}:Props) {
    // console.log('render CardList');

    return (
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
    );

}

