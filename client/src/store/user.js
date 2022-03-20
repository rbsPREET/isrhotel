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
        isAdmin: false
    },
    reducers: {
        checkAuthenticated(state, action) {
            state._id = action.payload._id;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },
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
            dispatch(userActions.login({
                _id: user.id,
                isLoggedIn: true,
                token: user.token
            }))
        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg[1].trim());
        }
    }
};



export const logoutHandler = (id) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/auth/logout", id);
            if (response.status !== 200 && !response.success) {
                return;
            }
        }
        try {
            await sendRequest();
            dispatch(userActions.logout());
        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg[1].trim());
        }
    }
};



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
            console.log(err);
        }
    }
}


export const checkIfLoggedIn = (id) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.post('http://localhost:5000/api/v1/auth/verify_token', {
                userId: id
            });
            if (response.status !== 200) {
                return;
            }
            return response.data;
        }
        try {
            const data = await sendRequest();
            dispatch(userActions.checkAuthenticated({
                isLoggedIn: data.success,
                _id: data.data.user._id,
                token: data.data.token
            }))
        } catch (err) {
            dispatch(userActions.logout())
        }
    }
}


export const userActions = userSlice.actions;
export default userSlice;