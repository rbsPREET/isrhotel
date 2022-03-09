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
        checkValidityForEmail(state, action) {},
        checkValidityForPassword(state, action) {},
        checkValidityForName(state, action) {},
        checkValidityForAge(state, action) {},
        comparePasswordConfirmation(state, action) {},
    }
})

export const storeUser = (data) => {
    return () => {
        const sendRequest = async () => {
            const response = await axios.post("http://localhost:5000/api/v1/auth/register", data);

            if (response.status !== 200) {
                return;
            }
        }
        try {
            sendRequest();
        } catch (err) {
            console.log(err);
        }
    }
}


export const userActions = userSlice.actions;
export default userSlice;