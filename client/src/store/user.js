import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: null,
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        login(state, action) {
            state._id = action.payload._id;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
        logout(state, action) {
            state._id = null;
            state.isLoggedIn = false;
            state.token = null
        },
    }
})

export const loginHandler = (data) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/auth/login", data);
            if (response.status !== 200 && !response.success) {
                return;
            }
            return response.data;
        }
        try {
            const user = await sendRequest();
            localStorage.setItem('token', user.token);
            dispatch(userActions.login({
                _id: user.id,
                isLoggedIn: true,
                token: localStorage.getItem('token')
            }))
        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg[1].trim());
        }
    }
};



export const logoutHandler = () => {};



export const storeUser = (data) => {
    return async () => {
        const sendRequest = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/auth/register", data);

            if (response.status !== 201) {
                return;
            }
        }
        try {
            await sendRequest();
        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg[1].trim());
        }
    }
}


export const userActions = userSlice.actions;
export default userSlice;