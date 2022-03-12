import axios from 'axios';
import {
    createSlice
} from "@reduxjs/toolkit";


const mallSlice = createSlice({
    name: 'mall',
    initialState: {
        img: null,
        description: null,
        email: null,
        guests: null,
        price: null,
        rooms: null,
        title: null,
        _id: null
    },
    reducers: {
        getCurrentMall(state, action) {
            const {
                aditionalObjects,
                description,
                email,
                guests,
                img,
                price,
                rooms,
                title,
                _id
            } = action.payload;
            state.aditionalObjects = aditionalObjects;
            state.description = description;
            state.email = email;
            state.img = img;
            state._id = _id;
            state.price = price;
            state.guests = guests;
            state.rooms = rooms;
            state.title = title;
        }
    }
})

export const GetMall = (props) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/malls/${props}`);
            if (res.status !== 200) {
                return;
            }
            return await res.data;
        }
        try {
            const data = await sendRequest();
            dispatch(mallSlice.actions.getCurrentMall(data))

        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg);
        }
    }
}


export const mallActions = mallSlice.actions;
export default mallSlice;