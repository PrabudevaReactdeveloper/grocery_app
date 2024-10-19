import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
    name: "User",
    initialState: {
        value: 0
    },
    reducers: {
        PlaceOrder: (state, action) => {
            state.value = action.payload
        },
    }
})
export const { PlaceOrder } = UserSlice.actions;
export default UserSlice.reducer