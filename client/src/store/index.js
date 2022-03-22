import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import mallSlice from './mall';
import {
    persistReducer,createTransform
} from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'
// import thunk from 'redux-thunk';

import userSlice from './user';
import CryptoJS from 'crypto-js';
const reducers = combineReducers({
    user: userSlice.reducer,
    mall: mallSlice.reducer
})

const persisteConfig = {
    key: 'root',
    storage:storageSession,
    transforms:[
        createTransform(
            state => state,
            state => CryptoJS.AES.encrypt(JSON.stringify(state), 'random').toString(),
        )
      ]
}
const persistedReducer = persistReducer(persisteConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    // middleware: [thunk] //think middleware by redux-thunk - basiclly we don't need it cause in @reduxjs/toolkit, the thunk middleware is already applied
})

export default store;