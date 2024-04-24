import {createSlice} from "@reduxjs/toolkit";
import {CardType} from "./types.ts";

interface cardState{
    cards: CardType[]
}

const userInit:cardState = {
    cards: [],
}

const slice = createSlice({
    name: 'cards',
    initialState: userInit,
    reducers: {
        setCards: (state, action) =>{
            state.cards = action.payload
        },
        addCard: (state, action) =>{
            state.cards.push(action.payload)
        },
        removeCard: (state, action) =>{
            state.cards = state.cards.filter(function (el) {
                return el.id!=action.payload;
            });
        },
    }
})


export const { setCards, addCard, removeCard} = slice.actions;
export default slice.reducer;