import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {ICity, IFetchedApiData} from "../../Models/City";

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
                    favorites: false,
                } as ICity
            }),
        },
        removeCity(state, action: PayloadAction<string>) {
            const index = state.findIndex((city) => city.id === action.payload);
            state.splice(index, 1);
        },
        AddFetchedData(state, action: PayloadAction<IFetchedApiData>) {
            state.findIndex((city) => city.fetchedData = action.payload)
        },
        addToFavorites:((state) => {
            state.findIndex((city) => {city.favorites = !city.favorites})
        })
    },
});

export const {addCity, removeCity, AddFetchedData, addToFavorites} = citySlice.actions;

export default citySlice.reducer;