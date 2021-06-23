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
                    active: false,
                } as ICity
            }),
        },
        removeCity(state, action: PayloadAction<string>) {
            const index = state.findIndex((city) => city.id === action.payload);
            state.splice(index, 1);
        },
        AddFetchedData(state, action: PayloadAction<IFetchedApiData>) {
            state.findIndex((city) => city.fetchedData = action.payload);
        },
        toggleFavorites: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((city) => city.id === action.payload);
            state[index].favorites = !state[index].favorites;
        },
        setActive: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((city) => city.id === action.payload);
            state[index].active = !state[index].active;
        },
    },
});

export const {addCity, removeCity, AddFetchedData, toggleFavorites, setActive} = citySlice.actions;

export default citySlice.reducer;