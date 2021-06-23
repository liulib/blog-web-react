import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commonSlice } from './common/slice';

const rootReducer = combineReducers({
    common: commonSlice.reducer
});

const store = configureStore({ reducer: rootReducer, devTools: true });

export type RootState = ReturnType<typeof store.getState>;

export default store;
