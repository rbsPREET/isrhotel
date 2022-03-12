import {
    configureStore
} from '@reduxjs/toolkit';
import mallSlice from './mall';
import userSlice from './user';


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        mall:mallSlice.reducer
    }
})

export default store;