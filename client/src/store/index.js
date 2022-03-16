import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';
import mallSlice from './mall';
import {
    persistReducer
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import userSlice from './user';

const reducers = combineReducers({
    user: userSlice.reducer,
    mall: mallSlice.reducer
})

const persisteConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persisteConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: 'development',
    middleware: [thunk]
})

export default store;