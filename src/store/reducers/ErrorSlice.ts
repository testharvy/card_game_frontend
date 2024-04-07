import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface errorState{
    text: string;
}

const errorInit:errorState = {
    text: '',
}

const errorSlice = createSlice({
    name: 'error',
    initialState: errorInit,
    reducers: {
        changeError: (state, action:PayloadAction<string>) =>{
            state.text = action.payload
        },
    }
})

export const { changeError } = errorSlice.actions;
export default errorSlice.reducer;