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

const userSlice = createSlice({
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


export const { setUserFetchingStatus, setToken, changeNickname, changeCoins, clearUser } = userSlice.actions;
export default userSlice.reducer;