import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {ICity} from "../../app/Models/City";

const initialState = [] as ICity[]

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: {
            reducer: (state, action: PayloadAction<ICity>) => {
                state.push(action.payload);
            },
            prepare: (name: string) => ({
                payload: {
                    id: nanoid(),
                    name,
                } as ICity
            }),
        },
        removeCity(state, action) {
            const index = state.findIndex((city) => city.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const {addCity, removeCity} = citySlice.actions;

export default citySlice.reducer;