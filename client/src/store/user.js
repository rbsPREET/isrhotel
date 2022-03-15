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
        checkValidityForEmail(state, action) { },
        checkValidityForPassword(state, action) { },
        checkValidityForName(state, action) { },
        checkValidityForAge(state, action) { },
        comparePasswordConfirmation(state, action) { },
    }
})

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