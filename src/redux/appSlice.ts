import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IApp, Status} from '../app/Models/App'

const initialState = {status: Status.Idle} as IApp;

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload
        },
    },
});

export const {changeStatus} = appSlice.actions;

export default appSlice.reducer;