
export function RulesPage() {
    return (
        <>
            <h2>Объедениение</h2>
            <ul>
                <li>
                    Две карты одинаково уровня можно оъединить в одну с большим уровнем
                </li>
                <li>
                    Карты максимального уровня (4) объединять нельзя
                </li>
                {/*<li>*/}
                {/*    Тип полученной карты зависит от того какие карты были потрачены*/}
                {/*</li>*/}
            </ul>
            <h2>Монеты</h2>
            <ul>
                <li>Раз в час(минуту) можно получить 100 монет</li>
            </ul>
            <h2>Новая карта</h2>
            <ul>
                100 монет можно обменять на одну случайную карту уровня 1
            </ul>
            <h2>Продажа</h2>
            <ul>
                Карту можно продать по цене Ур./2 * 50
            </ul>
        </>
    );
}