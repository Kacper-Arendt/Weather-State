import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {ICity, IFetchedApiData} from "../../app/Models/City";

const initialState = [] as ICity[]

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        addCity: {
            reducer: (state, action: PayloadAction<ICity>) => {
                state.push(action.payload);
            },
            prepare: (searchedCity: string) => ({
                payload: {
                    id: nanoid(),
                    searchedCity,
                } as ICity
            }),
        },
        removeCity(state, action: PayloadAction<string>) {
            const index = state.findIndex((city) => city.id === action.payload);
            state.splice(index, 1);
        },
        AddFetchedData(state, action: PayloadAction<IFetchedApiData>) {
            state.findIndex((city) => city.fetchedData = action.payload)
        }
    },
});

export const {addCity, removeCity, AddFetchedData} = citySlice.actions;

export default citySlice.reducer;