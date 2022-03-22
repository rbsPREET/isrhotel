import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import mallSlice from './mall';
import {
    persistReducer
} from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'
import expireReducer from 'redux-persist-expire'
// import thunk from 'redux-thunk';

import userSlice from './user';
const reducers = combineReducers({
    user: userSlice.reducer,
    mall: mallSlice.reducer
})

const persisteConfig = {
    key: 'root',
    storage:storageSession,
    transforms:[
        expireReducer('user',{
            persistedAtKey: '__persisted_at',
            // (Required) Seconds after which store will be expired
            expireSeconds: 86400, //after day
            // (Optional) State to be used for resetting e.g. provide initial reducer state
            expiredState: {
                _id:null,
                isLoggedIn:false
            },
            // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey` 
            // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
            autoExpire: true
        })
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