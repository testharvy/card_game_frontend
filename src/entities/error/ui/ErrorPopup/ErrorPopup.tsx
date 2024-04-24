import {useEffect, useRef, useState} from "react";
import {
    CSSTransition,
} from 'react-transition-group';
import {useTypedSelector, useTypedDispatch} from "@/shared/hooks";
import {changeError} from "../../model/slice.ts"
import styles from "./ErrorPopup.module.scss"


export function ErrorPopup(){
    const error = useTypedSelector(state => state.error.text);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(!!error);
    }, [error]);
    const dispatch = useTypedDispatch();
    function handleClose() {
        setShowPopup(false);
    }

    const nodeRef = useRef(null);

    return(
        <>
            <CSSTransition in={showPopup} timeout={300}
                           classNames={{
                               enterActive: styles.MyClassEnterActive,
                               enterDone: styles.MyClassEnterDone,
                               exitActive: styles.MyClassExitActive,
                               exitDone: styles.MyClassEnterDone,
                           }}
            unmountOnExit
            onExited={() => dispatch(changeError(''))}
            >
                <div ref={nodeRef} className={styles.MyClass}>
                    <div className={styles.bg} onClick={handleClose}>
                        <div className={styles.popup}>
                            {error}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}