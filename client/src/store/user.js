import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';


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
            axios.post("http://localhost:5000/api/v1/auth/register", action.payload)
                .then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err);
                });
        },
        updateUser(state, action) {},
        deleteUser(state, action) {}
    }

})

export const userActions = userSlice.actions;
export default userSlice;