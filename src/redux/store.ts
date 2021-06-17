import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import cityReducer from './city/citySlice';
import appReducer from './appSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        cities: cityReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

export default store;
