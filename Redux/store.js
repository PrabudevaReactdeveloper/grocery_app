import { configureStore } from "@reduxjs/toolkit";
import CartScreenReducer from "../Redux/CartSlice";
export const store = configureStore({
    reducer: {
        CartScreenReducer
    }
})
