import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[]
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            const { productId, quantity } = action.payload
            start.actions.addToCart({ productId, quantity })
        }
    }



})

export const { addToCart } =productSlice.actions
export default productSlice.reducer