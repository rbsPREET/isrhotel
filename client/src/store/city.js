import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const citySlice = createSlice({
    name:'city',
    initialState:{
        names:[],
    },
    reducers:{
            cities(state,action){
                state.names = action.payload
            }
    }

})

export const getCities = ()=>{
    return async dispatch=>{
        const sendRequest = async () =>{
            const res = await axios.get(`http://localhost:5000/api/v1/cities`);
            if(res.status !== 200){
                return;
            }
            return res.data
        }
        try{
            const data = await sendRequest();
            dispatch(cityActions.cities(data))
        }catch(err){
            console.log(err)
        }
    }
}
export const cityActions  = citySlice.actions
export default citySlice;