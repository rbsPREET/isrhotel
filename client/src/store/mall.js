import axios from 'axios';
import {
    createSlice
} from "@reduxjs/toolkit";


const mallSlice = createSlice({
    name: 'mall',
    initialState: {
        information: {
            img: null,
            address: null,
            description: null,
            email: null,
            guests: null,
            price: null,
            rooms: null,
            title: null,
            reviews: {
                count: null,
                stars: {
                    value: null,
                    count: null
                }
            },
            _id: null
        },
        searchToDispatch: {
            _id: null,
            name: null,
            address: null
        }
    },
    reducers: {
        getAmountOfRating(state,action){

            state.information.reviews.count = action.payload
        },
        getMallDetails(state, action) {
            state.searchToDispatch = action.payload
        },
        getCurrentMall(state, action) {
            state.information = action.payload;
        },
        addOrUpadteStars(state, action) {
            console.log(action.payload)
            state.information.reviews.stars.four.value = action.payload.starValue;
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
            dispatch(mallActions.getCurrentMall(data))

        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg);
        }
    }
}

export const AddOrUpdateMallReviewsStars = (data) => {
    console.log(data);
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post(`http://localhost:5000/api/v1/reviews/${data.mallId}/add`, data);
            if (res.status !== 200) {
                return;
            }
            return await res.data;
        }
        try {
            const data = await sendRequest();
            dispatch(mallActions.addOrUpadteStars(data))

        } catch (err) {
            const msg = err.message.split('status code')
            console.log('status code ' + msg);
        }
    }
}


export const mallActions = mallSlice.actions;
export default mallSlice;