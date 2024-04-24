import {createSlice} from "@reduxjs/toolkit";

interface userState{
    loaded: boolean;
    name: string;
    coins: number;
    token: string;
}

const userInit:userState = {
    loaded: false,
    name: '',
    coins: 0,
    token: '',
}

export const slice = createSlice({
    name: 'user',
    initialState: userInit,
    reducers: {
        setUserFetchingStatus: (state, action) =>{
            state.loaded = action.payload
        },
        setToken: (state, action) =>{
            state.token = action.payload
        },
        changeNickname: (state, action) =>{
            state.name = action.payload
        },
        changeCoins: (state, action) =>{
            state.coins = action.payload
        },
        clearUser: () => userInit,
    }
})


export const { setUserFetchingStatus, setToken, changeNickname, changeCoins, clearUser } = slice.actions;
export default slice.reducer;