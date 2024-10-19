import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name: "User",
    initialState: {
        value: 0
    },
    reducers: {
        PlaceOrder: (state, action) => {
            state.value = action.payload
            // let isAvailable = state.find((e) => e.name == action.payload.name);
            // if (isAvailable) {
            //     action.payload["quantity"] += 1
            // }
            // else {
            //     state.push({ ...action.payload, quantity: 1 })
            // }
        },
    }
})
export const { PlaceOrder } = UserSlice.actions;
export default UserSlice.reducer