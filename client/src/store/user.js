import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';
import useHttp from "../api/http";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: '',
        lastName: '',
        address: '',
        phone: null,
        email: null,
        password: null,
    },
    reducers: {
        storeUser(state, action) {
            const register = useHttp(axios.post("http://localhost:5000/api/v1/auth/register"));
            const data = register(action.payload);

            console.log(data);
        },
        updateUser(state, action) {},
        deleteUser(state, action) {}
    }

})

export const userActions = userSlice.actions;
export default userSlice;