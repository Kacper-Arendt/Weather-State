import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IApp, Status} from '../Models/App'

const initialState = {status: Status.Idle, favoritesCities: []} as IApp;

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        addToFavCities: (state, action) => {
            state.favoritesCities.push(action.payload)
        },
        removeFromFav: (state, action: PayloadAction<string>) => {
            const city = state.favoritesCities.indexOf(action.payload)
            state.favoritesCities.splice(city,1)
        }
    },
});

export const {changeStatus, setMessage, addToFavCities, removeFromFav} = appSlice.actions;

export default appSlice.reducer;