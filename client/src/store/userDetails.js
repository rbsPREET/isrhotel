import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';


const userDetails = createSlice({
    name: 'userDetails',
    initialState: {
        _id: null,
        username: null,
        isLoggedIn: false,
    },
    reducers: {

    }
})

export const getUserDetails = (data) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await axios.get("http://localhost:5000/api/v1/users/:id");
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

export const userDetailsAction = userDetails.actions;
export default userDetails;