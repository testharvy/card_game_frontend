import React, {useContext} from "react";
import {Checkbox} from "@/shared/ui";
import {SORTING} from "../const/enum.ts"
import styles from './CardSort.module.scss';
import {ThemeContext} from "@/shared/theme";

interface Props{
    sorting: string,
    setSorting: React.Dispatch<React.SetStateAction<string>>
}

export function CardSort({sorting, setSorting}:Props ) {
    const {theme} = useContext(ThemeContext);
    function changeSorting(event: React.ChangeEvent<HTMLInputElement>) {
        setSorting(event.target.value);
    }

    return (
        <div className={`${styles.sort} ${styles[theme]}`}> <span className={styles.sortTitle}>Сортировка:</span>
            <div className={styles.options}>
                <Checkbox name={'sort'} value={SORTING.noSort} checked={sorting == SORTING.noSort} text={'Без сортировки'} onChange={changeSorting}></Checkbox>
                <Checkbox name={'sort'} value={SORTING.bySuit} checked={sorting == SORTING.bySuit} text={'По масти'} onChange={changeSorting}></Checkbox>
                <Checkbox name={'sort'} value={SORTING.byLvl} checked={sorting == SORTING.byLvl} text={'По уровню'} onChange={changeSorting}></Checkbox>
            </div>
        </div>
    );

}

