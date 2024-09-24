import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        AddtoCart: (state, action) => {
            let isAvailable = state.find((e) => e.name == action.payload.name);
            if (isAvailable) {
                action.payload["quantity"] += 1
            }
            else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        RemoveTheCart: (state, action) => {
            let isAvailable = state.filter((e) => e.name != action.payload.name);
            return (state = isAvailable);
        },
        incrementQuantity: (state, action) => {
            let isAvailable = state.find((e) => e.name == action.payload.name);
            if (isAvailable) {
                isAvailable.quantity ++;
            }
            else {
                console.log("Alert");

            }
        },
        decrementQuantity: (state, action) => {
            let isAvailable = state.find((e) => e.name == action.payload.name);
            if (isAvailable.quantity == 1) {
                isAvailable.quantity = 1;
            }
            else {
                isAvailable.quantity--;
            }
        },
    },
})

export const { AddtoCart, RemoveTheCart, incrementQuantity, decrementQuantity } = CartSlice.actions
export default CartSlice.reducer;