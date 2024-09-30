import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface errorState{
    text: string;
}

const errorInit:errorState = {
    text: '',
}

const slice = createSlice({
    name: 'error',
    initialState: errorInit,
    reducers: {
        changeError: (state, action:PayloadAction<string>) =>{
            state.text = action.payload
        },
    }
})

export const { changeError } = slice.actions;
export default slice.reducer;