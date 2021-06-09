import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

interface City {
    id: string,
    name: string,
}

const initialState = [] as City[]

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: {
            reducer: (state, action: PayloadAction<City>) => {
                state.push(action.payload);
            },
            prepare: (name: string) => ({
                payload: {
                    id: nanoid(),
                    name,
                } as City
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