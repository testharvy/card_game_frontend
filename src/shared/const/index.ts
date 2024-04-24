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