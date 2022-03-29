import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: null,
        username: null,
        isLoggedIn: false,
    },
    reducers: {
        checkAuthenticated(state, action) {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        login(state, action) {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        logout(state, action) {
            state._id = null;
            state.username = null;
            state.isLoggedIn = false;
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
                username: "TempUser", // will add getUser handler to get logged in user details
                isLoggedIn: true,
            }))
        } catch (err) {
            // const msg = err.message.split('status code')
            console.log(err);
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
            // const msg = err.message.split('status code')
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
                username: "TempUser",
                _id: data.data.user._id,
            }))
        } catch (err) {
            dispatch(userActions.logout())
        }
    }
}


export const userActions = userSlice.actions;
export default userSlice;