import { createSlice } from "@reduxjs/toolkit";
import  productData from '../productData'


const initialState ={
    cart: [],
    items : productData,
    totalQuantity : 0,
    totalPrice : 0
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
})

export default cartSlice.reducer;
