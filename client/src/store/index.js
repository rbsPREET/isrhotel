import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';
import mallSlice from './mall';
import {
    persistReducer
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk';

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
    // middleware: [thunk] //think middleware by redux-thunk - basiclly we don't need it cause in @reduxjs/toolkit, the thunk middleware is already applied
})

export default store;